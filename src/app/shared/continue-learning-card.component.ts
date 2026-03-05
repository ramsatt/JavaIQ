import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { COURSE_TOPICS } from '../data/course-topics.const';

interface ResumeTarget {
  courseSlug:  string;
  courseTitle: string;
  topicSlug:   string;
  topicTitle:  string;
  progressPct: number;
  themeColor:  string;
}

@Component({
  selector: 'app-continue-learning-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (resumeTarget(); as t) {
      <div class="continue-card" (click)="resume(t)" role="button" tabindex="0"
           [style.--course-color]="t.themeColor"
           (keydown.enter)="resume(t)" (keydown.space)="resume(t)">
        <div class="continue-header">
          <span class="continue-badge">▶ Continue Learning</span>
          <span class="continue-pct">{{ t.progressPct }}% Complete</span>
        </div>

        <p class="continue-course">{{ t.courseTitle }}</p>

        <p class="continue-next">
          <span class="next-label">Next:</span>
          {{ t.topicTitle }}
        </p>

        <div class="continue-track">
          <div class="continue-fill"
               [style.width.%]="t.progressPct"
               [style.background]="t.themeColor">
          </div>
        </div>

        <div class="continue-cta">
          <span>Resume →</span>
        </div>
      </div>
    }
  `,
  styles: [`
    .continue-card {
      border-radius: 18px;
      padding: 18px 18px;
      cursor: pointer;
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease;
      /* Subtle gradient border */
      background:
        #ffffff padding-box,
        linear-gradient(160deg, rgba(27,67,50,0.22), rgba(27,67,50,0.06), rgba(27,67,50,0.22)) border-box;
      border: 1.5px solid transparent;
      box-shadow:
        0 2px 10px rgba(27,67,50,0.07),
        0 1px 3px rgba(0,0,0,0.04);
      position: relative;
      overflow: hidden;
    }

    /* Course color top accent bar */
    .continue-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: var(--course-color, #1B4332);
      opacity: 0.85;
    }

    .continue-card:hover {
      transform: translateY(-2px);
      box-shadow:
        0 10px 32px rgba(27,67,50,0.14),
        0 3px 8px rgba(0,0,0,0.06);
    }

    :host-context(html.dark) .continue-card {
      background:
        #0d1a10 padding-box,
        linear-gradient(160deg, rgba(82,183,136,0.20), rgba(82,183,136,0.05), rgba(82,183,136,0.20)) border-box;
      box-shadow: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.35);
    }

    :host-context(html.dark) .continue-card:hover {
      box-shadow: 0 10px 36px rgba(0,0,0,0.65), 0 4px 10px rgba(0,0,0,0.4);
    }

    .continue-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 9px;
      padding-top: 4px;
    }

    .continue-badge {
      font-size: 0.70rem;
      font-weight: 900;
      color: #1B4332;
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    :host-context(html.dark) .continue-badge { color: #52b788; }

    .continue-pct {
      font-size: 0.70rem;
      font-weight: 700;
      color: #6b7280;
      background: rgba(0,0,0,0.05);
      padding: 2px 8px;
      border-radius: 10px;
    }

    :host-context(html.dark) .continue-pct {
      color: #94a3b8;
      background: rgba(255,255,255,0.07);
    }

    .continue-course {
      font-size: 1.02rem;
      font-weight: 900;
      color: #0c1810;
      margin: 0 0 4px;
      letter-spacing: -0.01em;
    }

    :host-context(html.dark) .continue-course { color: #e4efe7; }

    .continue-next {
      font-size: 0.82rem;
      color: #5a7a68;
      margin: 0 0 13px;
    }

    :host-context(html.dark) .continue-next { color: #7aad8f; }

    .next-label {
      font-weight: 800;
      color: #1f3028;
      margin-right: 4px;
    }

    :host-context(html.dark) .next-label { color: #b8cfc0; }

    .continue-track {
      height: 6px;
      background: rgba(0,0,0,0.07);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 12px;
    }

    :host-context(html.dark) .continue-track { background: rgba(255,255,255,0.09); }

    .continue-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
    }

    .continue-cta {
      font-size: 0.83rem;
      font-weight: 800;
      color: #1B4332;
      text-align: right;
      transition: letter-spacing 0.2s ease;
    }

    .continue-card:hover .continue-cta { letter-spacing: 0.02em; }

    :host-context(html.dark) .continue-cta { color: #52b788; }
  `]
})
export class ContinueLearningCardComponent {
  private dataService = inject(DataService);
  private router      = inject(Router);

  resumeTarget = computed((): ResumeTarget | null => {
    // Track the signal for reactivity
    this.dataService.completedTopicIds();

    for (const course of COURSE_TOPICS) {
      const completed  = this.dataService.getCourseCompletedCount(course.slug);
      const total      = course.topics.length;

      if (completed >= total) continue;  // this course is fully done

      // Find first incomplete topic
      const nextTopic = course.topics.find(
        t => !this.dataService.isTopicComplete(`${course.slug}::${t.slug}`)
      );
      if (!nextTopic) continue;

      return {
        courseSlug:  course.slug,
        courseTitle: course.title,
        topicSlug:   nextTopic.slug,
        topicTitle:  nextTopic.title,
        progressPct: this.dataService.getCourseProgress(course.slug, total),
        themeColor:  course.themeColor
      };
    }

    return null;  // all courses complete — hide the card
  });

  resume(t: ResumeTarget): void {
    this.router.navigate(['/tutorials', t.courseSlug, t.topicSlug]);
  }
}
