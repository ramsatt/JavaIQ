import * as admin from 'firebase-admin';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface ExplanationRequest {
  questionId: number;
  question:   string;
  answer:     string;
}

interface ExplanationResponse {
  explanation: string;
  cached:      boolean;
}

/**
 * getExplanation — Callable Cloud Function
 *
 * Accepts { questionId, question, answer } and returns an AI-generated
 * "why is this the correct answer" explanation.
 *
 * Results are cached in `ai_explanations/{questionId}` — Firestore reads
 * are free for cached responses; Gemini is only called on a cache miss.
 *
 * Requires the GEMINI_API_KEY to be set via Firebase Secret Manager:
 *   firebase functions:secrets:set GEMINI_API_KEY
 */
export const getExplanation = onCall<ExplanationRequest, Promise<ExplanationResponse>>(
  {
    // Declare the secret so it's injected as an env var at runtime
    secrets: ['GEMINI_API_KEY'],
    // Enforce authentication — only signed-in users can call this
    enforceAppCheck: false,
  },
  async (request) => {
    // Require authenticated caller
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'You must be signed in to use AI explanations.');
    }

    const { questionId, question, answer } = request.data;

    if (!questionId || !question || !answer) {
      throw new HttpsError('invalid-argument', 'questionId, question, and answer are required.');
    }

    const db = admin.firestore();
    const cacheRef = db.doc(`ai_explanations/${questionId}`);

    // ── Cache hit ────────────────────────────────────────────────────────────
    const cached = await cacheRef.get();
    if (cached.exists) {
      return {
        explanation: cached.data()!['explanation'] as string,
        cached: true,
      };
    }

    // ── Gemini API call ──────────────────────────────────────────────────────
    const apiKey = process.env['GEMINI_API_KEY'];
    if (!apiKey) {
      throw new HttpsError('internal', 'Gemini API key not configured.');
    }

    const genAI  = new GoogleGenerativeAI(apiKey);
    const model  = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are an expert Java interview coach. Explain clearly and concisely WHY the following answer is correct for a Java interview question. Focus on the key concepts, not just restating the answer. Keep it under 120 words.

Question: ${question}

Answer: ${answer}

Explanation:`;

    let explanation: string;
    try {
      const result = await model.generateContent(prompt);
      explanation  = result.response.text().trim();
    } catch (err) {
      console.error('[getExplanation] Gemini error:', err);
      throw new HttpsError('internal', 'Failed to generate explanation. Please try again.');
    }

    // ── Cache result ─────────────────────────────────────────────────────────
    await cacheRef.set({
      explanation,
      questionId,
      generatedAt: admin.firestore.FieldValue.serverTimestamp(),
      model: 'gemini-1.5-flash',
    });

    return { explanation, cached: false };
  }
);
