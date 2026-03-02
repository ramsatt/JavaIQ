import { Question } from './question.model';

export const CODING_QUESTIONS: Question[] = [
  {
    id: 301,
    category: 'Coding Questions',
    question: 'How do you reverse a string in Java?',
    answer: 'String class does not have a reverse() method. You can convert the string to a character array and iterate from end to start, or use StringBuilder.reverse().',
    asked_metadata: '15x Amazon, 12x Microsoft, 10x Google',
    coreConceptDescription: 'Strings in Java are immutable. Use StringBuilder.reverse() for the simplest approach, or iterate the char array backward for manual reversal. Time: O(n), Space: O(n).',
    code: `public String reverse(String in) {
    if (in == null) return null;
    StringBuilder out = new StringBuilder();
    char[] chars = in.toCharArray();
    for (int i = chars.length - 1; i >= 0; i--)
        out.append(chars[i]);
    return out.toString();
}`,
    subConcepts: [
      { title: 'StringBuilder Approach', description: '<b>new StringBuilder(str).reverse().toString()</b> — simplest one-liner. O(n) time and space.' },
      { title: 'Two-Pointer Approach', description: 'Convert to char array, swap <b>start and end pointers</b> moving inward. In-place on the array.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Interview Classic', description: 'One of the most common warm-up questions. Know both StringBuilder and manual approaches.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Follow-Up', description: 'Reverse words in a sentence: split by space, reverse each word or the entire array.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 302,
    category: 'Coding Questions',
    question: 'How do you swap two numbers without using a third variable?',
    answer: 'By using mathematical operations: a = a + b; b = a - b; a = a - b;',
    asked_metadata: '8x Oracle, 6x Facebook, 5x Apple',
    coreConceptDescription: 'Swap without temp variable using arithmetic (a=a+b, b=a-b, a=a-b) or XOR (a^=b, b^=a, a^=b). Note: arithmetic approach can overflow for large numbers.',
    code: `int a = 10, b = 20;
a = a + b; // a=30
b = a - b; // b=10
a = a - b; // a=20`,
    subConcepts: [
      { title: 'Arithmetic', description: '<b>a=a+b; b=a-b; a=a-b;</b> — simple but can cause <b>integer overflow</b> for large values.' },
      { title: 'XOR Bitwise', description: '<b>a^=b; b^=a; a^=b;</b> — no overflow risk. Works because XOR is its own inverse.' }
    ],
    useCases: [
      { icon: 'fa-graduation-cap', title: 'Conceptual Question', description: 'Tests understanding of arithmetic operations and bitwise operators.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'In Practice', description: 'In production code, always use a temp variable — it\'s clearer and the compiler optimizes it.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 303,
    category: 'Coding Questions',
    question: 'How do you check if a string contains vowels?',
    answer: 'You can use a regular expression or iterate through the string to check for characters a, e, i, o, u.',
    asked_metadata: '5x IBM, 4x SAP, 3x Cisco',
    coreConceptDescription: 'Use regex matches(".*[aeiou].*") for a concise check, or iterate through characters and check against a vowel set for better performance on hot paths.',
    code: `public boolean hasVowels(String input) {
    return input.toLowerCase().matches(".*[aeiou].*");
}`,
    subConcepts: [
      { title: 'Regex Approach', description: '<b>matches(".*[aeiou].*")</b> — concise but regex compilation has overhead for repeated calls.' },
      { title: 'Loop Approach', description: 'Iterate chars, check if <b>"aeiouAEIOU".indexOf(c) >= 0</b>. More performant for hot paths.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'String Processing', description: 'Common in text analysis, input validation, and string manipulation problems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Optimization', description: 'Pre-compile regex Pattern for repeated use: Pattern.compile("[aeiou]").matcher(input).find()', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 304,
    category: 'Coding Questions',
    question: 'How do you check if a number is prime?',
    answer: 'A number is prime if it is divisible only by 1 and itself. You can check divisibility from 2 up to the square root of n.',
    asked_metadata: '10x Microsoft, 8x Adobe, 7x Salesforce',
    coreConceptDescription: 'Check divisibility from 2 to √n. If any divides evenly, not prime. Optimization: check 2, then odd numbers only. Time: O(√n).',
    code: `public boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}`,
    subConcepts: [
      { title: 'Why √n?', description: 'If n has a factor > √n, the other factor must be < √n. So checking up to <b>√n is sufficient</b>.' },
      { title: 'Sieve of Eratosthenes', description: 'For finding <b>all primes up to N</b>, use the sieve algorithm: O(n log log n) time.' }
    ],
    useCases: [
      { icon: 'fa-calculator', title: 'Cryptography', description: 'RSA encryption relies on large prime numbers. Prime checking is fundamental to crypto.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Optimization', description: 'Skip even numbers after 2: check 2, then 3, 5, 7, 9... — halves the work.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 305,
    category: 'Coding Questions',
    question: 'How do you print a Fibonacci sequence using recursion?',
    answer: 'The Fibonacci number is the sum of the two preceding ones. Use a base case for count <= 1.',
    asked_metadata: '12x Google, 10x Amazon, 8x Netflix',
    coreConceptDescription: 'Recursive Fibonacci: fib(n) = fib(n-1) + fib(n-2). Base case: fib(0)=0, fib(1)=1. Naive recursion is O(2^n). Use memoization or iteration for O(n).',
    code: `public int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`,
    subConcepts: [
      { title: 'Naive Recursion', description: 'Simple but <b>O(2^n)</b> — exponential time due to repeated calculations. Impractical for large n.' },
      { title: 'Dynamic Programming', description: '<b>Memoization</b> (top-down) or <b>tabulation</b> (bottom-up) reduces to O(n) time, O(n) or O(1) space.' }
    ],
    useCases: [
      { icon: 'fa-graduation-cap', title: 'Recursion Basics', description: 'Classic problem to demonstrate recursion, memoization, and dynamic programming concepts.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Iterative is Best', description: 'Iterative approach with two variables: O(n) time, O(1) space — optimal for production.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 306,
    category: 'Coding Questions',
    question: 'How do you check if a list of integers contains only odd numbers?',
    answer: 'Iterate through the list and return false if any number is divisible by 2. Parallel streams can be used for large lists.',
    asked_metadata: '6x Twitter, 5x LinkedIn, 4x Uber',
    coreConceptDescription: 'Use Stream.allMatch(x -> x % 2 != 0) for a functional approach. allMatch short-circuits on the first even number found.',
    code: `public boolean onlyOdds(List<Integer> list) {
    return list.stream().allMatch(x -> x % 2 != 0);
}`,
    subConcepts: [
      { title: 'allMatch()', description: 'Returns true if <b>all elements match</b> the predicate. <b>Short-circuits</b> on first failure.' },
      { title: 'Stream Alternatives', description: '<b>anyMatch()</b>: true if any matches. <b>noneMatch()</b>: true if none match.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Functional Java', description: 'Demonstrates Stream API mastery — prefer functional approaches over manual loops.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Performance', description: 'parallelStream().allMatch() for very large lists — leverages multiple CPU cores.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 310,
    category: 'Coding Questions',
    question: 'How do you reverse a given number in Java?',
    answer: 'Use a while loop with modulo and division. Remainder gives the last digit, add it to result * 10, then divide the number by 10.',
    asked_metadata: '10x TCS, 8x CTS, 7x Infosys',
    coreConceptDescription: 'Extract digits using % 10, build reversed number with result * 10 + digit, and remove last digit with / 10. Loop until number becomes 0.',
    code: `int num = 12345, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = (res * 10) + rem;
    num = num / 10;
}
System.out.println("Reverse: " + res);`,
    subConcepts: [
      { title: 'Extraction Pattern', description: '<b>% 10</b> gets the last digit. <b>/ 10</b> removes the last digit. This pattern is used in many number problems.' },
      { title: 'Overflow Check', description: 'For large numbers, check if <b>res > Integer.MAX_VALUE / 10</b> before multiplying to prevent overflow.' }
    ],
    useCases: [
      { icon: 'fa-graduation-cap', title: 'Building Block', description: 'This digit extraction pattern is used in palindrome, Armstrong, and digit sum problems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'LeetCode #7', description: 'Reverse Integer is a popular LeetCode problem — key is handling overflow and negative numbers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 311,
    category: 'Coding Questions',
    question: 'How do you check if a number is a Palindrome?',
    answer: 'Reverse the number and check if the reversed number is equal to the original number.',
    asked_metadata: '12x Wipro, 10x HCL, 8x Tech Mahindra',
    coreConceptDescription: 'Reverse the number using the digit extraction pattern and compare with the original. For strings, use two-pointer technique comparing start and end characters.',
    code: `int num = 121, original = num, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = (res * 10) + rem;
    num = num / 10;
}
boolean isPal = (original == res);`,
    subConcepts: [
      { title: 'Number Palindrome', description: '<b>Reverse the number</b> and compare. 121 → reversed 121. Equal → palindrome.' },
      { title: 'String Palindrome', description: '<b>Two pointers</b>: compare str[left] == str[right], move inward. O(n/2) comparisons.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'LeetCode #9', description: 'Palindrome Number — can be solved without converting to string by reversing half the number.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Optimize', description: 'Reverse only half the digits and compare — avoids potential overflow for large numbers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 312,
    category: 'Coding Questions',
    question: 'How do you check if a number is an Armstrong number?',
    answer: 'An Armstrong number is a number that is equal to the sum of cubes of its digits (for 3-digit numbers).',
    asked_metadata: '6x Zoho, 5x Freshworks, 4x Honeywell',
    coreConceptDescription: 'An n-digit Armstrong (narcissistic) number equals the sum of each digit raised to the nth power. 153 = 1³ + 5³ + 3³. Uses the same digit extraction pattern.',
    code: `int num = 153, original = num, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = res + (rem * rem * rem);
    num = num / 10;
}
boolean isArmstrong = (original == res);`,
    subConcepts: [
      { title: 'Definition', description: '<b>Sum of digits^n = number</b> where n is the digit count. 153 = 1³+5³+3³ = 1+125+27 = 153.' },
      { title: 'Generalized', description: 'For any n-digit number: 1634 = 1⁴+6⁴+3⁴+4⁴. First count digits, then compute sum of powers.' }
    ],
    useCases: [
      { icon: 'fa-calculator', title: 'Number Theory', description: 'Demonstrates digit manipulation and mathematical property verification.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Pattern Reuse', description: 'Same digit extraction loop as reverse, palindrome, and digit sum problems.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 313,
    category: 'Coding Questions',
    question: 'How do you find the sum of digits of a number?',
    answer: 'Extract each digit using modulo 10 and keep adding them to a sum variable.',
    asked_metadata: '7x Mindtree, 6x LTI, 5x Capgemini',
    coreConceptDescription: 'Use the standard digit extraction pattern: sum += num % 10 to add the last digit, then num /= 10 to remove it. Repeat until num is 0.',
    code: `int num = 153, sum = 0;
while (num > 0) {
    sum += num % 10;
    num /= 10;
}`,
    subConcepts: [
      { title: 'Digit Extraction', description: '<b>num % 10</b> gives last digit. <b>num /= 10</b> removes it. Sum all extracted digits.' },
      { title: 'Digital Root', description: 'Keep summing digits until single digit: <b>digital root = 1 + (n-1) % 9</b> — O(1) formula.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Foundation Problem', description: 'Digit extraction is a building block for palindrome, Armstrong, and many number theory problems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'One-Liner', description: 'String.valueOf(num).chars().map(c -> c - \'0\').sum() — Stream-based approach.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 314,
    category: 'Coding Questions',
    question: 'How do you find the Factorial of a number using a loop?',
    answer: 'Iterate from 1 to N and keep multiplying each number with the previous result.',
    asked_metadata: '15x TCS, 12x Accenture, 10x IBM',
    coreConceptDescription: 'Factorial n! = 1 × 2 × 3 × ... × n. Iterative approach is O(n) time, O(1) space. For large n, use BigInteger to avoid overflow (13! exceeds int range).',
    code: `int n = 5, fact = 1;
for (int i = 1; i <= n; i++) {
    fact *= i;
}`,
    subConcepts: [
      { title: 'Iterative (Preferred)', description: '<b>O(n) time, O(1) space</b>. Simple loop. No stack overflow risk.' },
      { title: 'Overflow Warning', description: '<b>13! = 6,227,020,800</b> exceeds int. 21! exceeds long. Use <b>BigInteger</b> for large factorials.' }
    ],
    useCases: [
      { icon: 'fa-calculator', title: 'Combinatorics', description: 'Factorials are used in permutations (nPr = n!/(n-r)!) and combinations (nCr).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Stream Approach', description: 'IntStream.rangeClosed(1, n).reduce(1, (a, b) -> a * b)', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 315,
    category: 'Coding Questions',
    question: 'How do you reverse each word in a string?',
    answer: 'Split the string by spaces, reverse each individual word, and join them back.',
    asked_metadata: '10x Amazon, 8x Flipkart, 7x Walmart',
    coreConceptDescription: 'Split by spaces, reverse each word using StringBuilder, and join back. Different from reversing the entire string or reversing word order.',
    code: `String str = "Hello Java", res = "";
String[] words = str.split(" ");
for (String w : words) {
    String revWord = new StringBuilder(w).reverse().toString();
    res += revWord + " ";
}`,
    subConcepts: [
      { title: 'Reverse Each Word', description: '"Hello Java" → "<b>olleH avaJ</b>". Each word is reversed individually. Word order preserved.' },
      { title: 'vs Reverse Word Order', description: '"Hello Java" → "<b>Java Hello</b>". Words stay intact but their order is reversed.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'String Manipulation', description: 'Common string processing problem. Know the difference from reversing word order.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Stream Approach', description: 'Arrays.stream(str.split(" ")).map(w -> new StringBuilder(w).reverse()).collect(joining(" "))', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 316,
    category: 'Coding Questions',
    question: 'How do you capitalize the first letter of each word in a string?',
    answer: 'Split the string, take the first char of each word, convert to uppercase, and append the rest of the string.',
    asked_metadata: '5x Myntra, 4x Paytm, 3x Zomato',
    coreConceptDescription: 'Split by spaces, capitalize first char with Character.toUpperCase(), append substring(1). Handle edge cases: empty strings, single characters.',
    code: `String str = "java class", res = "";
String[] words = str.split(" ");
for (String s : words) {
    res += Character.toUpperCase(s.charAt(0)) + s.substring(1) + " ";
}`,
    subConcepts: [
      { title: 'Manual Approach', description: '<b>Character.toUpperCase(s.charAt(0)) + s.substring(1)</b> — capitalize first, append rest.' },
      { title: 'Edge Cases', description: 'Handle <b>empty strings</b>, <b>single characters</b>, <b>multiple spaces</b>, and <b>null inputs</b>.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Title Case', description: 'Common utility for formatting display names, titles, and labels in applications.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Apache Commons', description: 'WordUtils.capitalize(str) from Apache Commons Lang — production-ready utility.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 317,
    category: 'Coding Questions',
    question: 'How do you remove duplicate characters from a string?',
    answer: 'Use a LinkedHashSet to maintain unique characters while preserving order.',
    asked_metadata: '10x Microsoft, 8x Oracle, 7x JP Morgan',
    coreConceptDescription: 'LinkedHashSet maintains insertion order and rejects duplicates. Add all chars to it, then build the result string. Time: O(n), Space: O(n).',
    code: `String str = "programming", res = "";
LinkedHashSet<Character> set = new LinkedHashSet<>();
for (char c : str.toCharArray()) set.add(c);
for (char c : set) res += c;`,
    subConcepts: [
      { title: 'LinkedHashSet', description: 'Maintains <b>insertion order</b> + <b>uniqueness</b>. Perfect for ordered deduplication.' },
      { title: 'Stream Approach', description: '<b>str.chars().distinct().forEach()</b> — functional but doesn\'t preserve char type easily.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Data Cleaning', description: 'Remove duplicate entries while preserving original order — common data processing task.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Follow-Up', description: 'Find first non-repeating character — use LinkedHashMap with count values.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 318,
    category: 'Coding Questions',
    question: 'How do you check if two strings are Anagrams?',
    answer: 'Convert strings to char arrays, sort them, and check if they are equal.',
    asked_metadata: '12x Google, 10x Amazon, 8x Goldman Sachs',
    coreConceptDescription: 'Two strings are anagrams if they contain the same characters with the same frequencies. Sort approach: O(n log n). Frequency map: O(n).',
    code: `char[] c1 = s1.toCharArray();
char[] c2 = s2.toCharArray();
Arrays.sort(c1);
Arrays.sort(c2);
boolean isAnagram = Arrays.equals(c1, c2);`,
    subConcepts: [
      { title: 'Sort Approach', description: '<b>Sort both, compare</b>. Simple but O(n log n). "listen" → "eilnst", "silent" → "eilnst".' },
      { title: 'HashMap Approach', description: 'Count char frequencies in <b>Map<Character, Integer></b>. Compare maps. O(n) time.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'LeetCode #242', description: 'Valid Anagram — popular problem. Use int[26] frequency array for lowercase-only strings.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Optimal', description: 'int[26] frequency array: increment for s1, decrement for s2. All zeros = anagram. O(n).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 319,
    category: 'Coding Questions',
    question: 'How do you find the frequency of each character in a string?',
    answer: 'Use a Map where the character is the key and its count is the value.',
    asked_metadata: '8x Cisco, 6x NetApp, 5x VMware',
    coreConceptDescription: 'Use LinkedHashMap to count character frequencies while preserving insertion order. getOrDefault(c, 0) + 1 handles first occurrences elegantly.',
    code: `Map<Character, Integer> map = new LinkedHashMap<>();
for (char c : str.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}`,
    subConcepts: [
      { title: 'Map Approach', description: '<b>getOrDefault(c, 0) + 1</b> — idiomatic Java for counting. LinkedHashMap preserves order.' },
      { title: 'Stream Approach', description: '<b>str.chars().mapToObj(c -> (char)c).collect(groupingBy(c -> c, counting()))</b>' }
    ],
    useCases: [
      { icon: 'fa-chart-simple', title: 'Text Analysis', description: 'Character frequency is the basis for finding most/least common characters.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Building Block', description: 'Used in anagram checking, first non-repeating character, and string compression.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 321,
    category: 'Coding Questions',
    question: 'How do you reverse a Linked List in Java?',
    answer: 'You can use the descendingIterator() for a quick reversal, or implement a manual pointer swap logic for custom lists.',
    asked_metadata: '15x Amazon, 12x Microsoft, 10x Adobe',
    coreConceptDescription: 'For Java LinkedList: use descendingIterator(). For singly-linked list (interview): use three pointers (prev, current, next) to reverse links in-place. O(n) time, O(1) space.',
    code: `LinkedList<Integer> l1 = new LinkedList<>();
LinkedList<Integer> reversed = new LinkedList<>();
l1.descendingIterator().forEachRemaining(reversed::add);`,
    subConcepts: [
      { title: 'Java Collections', description: '<b>descendingIterator()</b> on LinkedList — built-in reverse iteration. Collections.reverse() for in-place.' },
      { title: 'Manual (Interview)', description: '<b>prev=null; while(curr!=null) { next=curr.next; curr.next=prev; prev=curr; curr=next; }</b>' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'LeetCode #206', description: 'Reverse Linked List — must-know problem. Both iterative and recursive solutions are expected.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Follow-Ups', description: 'Reverse in groups of K, reverse between positions m and n — common follow-up questions.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 322,
    category: 'Coding Questions',
    question: 'How do you implement Binary Search?',
    answer: 'The array must be sorted. Compare the key with the middle element; if it matches, return index. If key is smaller, search left half; otherwise, search right half.',
    asked_metadata: '20x Google, 18x Facebook, 15x Apple',
    coreConceptDescription: 'Binary Search works on sorted arrays. Compare target with mid element, eliminate half the array each step. O(log n) time, O(1) space. Watch for integer overflow in mid calculation.',
    code: `int binarySearch(int[] arr, int key) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
    subConcepts: [
      { title: 'O(log n) Efficiency', description: 'Halves the search space each step. 1 billion elements → <b>only 30 comparisons</b>.' },
      { title: 'Overflow Bug', description: '<b>mid = low + (high - low) / 2</b> — prevents integer overflow when low + high exceeds Integer.MAX_VALUE.' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'Sorted Data', description: 'Essential for searching in sorted arrays, databases (B-trees), and file systems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Variations', description: 'Lower bound, upper bound, rotated array search, search insert position — all use binary search.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 323,
    category: 'Coding Questions',
    question: 'How do you sort a HashMap by its values?',
    answer: 'Convert the entry set to a list, sort the list using a comparator on values, and put them into a LinkedHashMap to maintain order.',
    asked_metadata: '8x Uber, 7x Lyft, 6x DoorDash',
    coreConceptDescription: 'HashMap has no order. To sort by values: convert entrySet to List, sort with Comparator.comparingByValue(), collect into LinkedHashMap (preserves insertion order).',
    code: `List<Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
list.sort((x, y) -> x.getValue().compareTo(y.getValue()));
Map<String, Integer> sorted = new LinkedHashMap<>();
for (Entry<String, Integer> e : list) sorted.put(e.getKey(), e.getValue());`,
    subConcepts: [
      { title: 'LinkedHashMap', description: 'Preserves <b>insertion order</b>. Essential for maintaining sort order after sorting entries.' },
      { title: 'Stream Approach', description: '<b>map.entrySet().stream().sorted(comparingByValue()).collect(toMap(...))</b> — modern Java style.' }
    ],
    useCases: [
      { icon: 'fa-chart-simple', title: 'Top-K Problems', description: 'Find top K frequent elements: frequency map → sort by value → take first K.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Leaderboards', description: 'Sort player scores or rankings stored in maps for display purposes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 327,
    category: 'Coding Questions',
    question: 'How do you check if two arrays contain the same elements?',
    answer: 'Create a Set from both arrays and compare the sets. If sizes match and all elements of one are in the other, they are the same.',
    asked_metadata: '6x Qualtrics, 5x ServiceNow, 4x Workday',
    coreConceptDescription: 'Convert arrays to HashSets and use equals(). Sets ignore duplicates and order. For exact matching (including duplicates), sort both arrays and compare.',
    code: `Set<Object> s1 = new HashSet<>(Arrays.asList(a1));
Set<Object> s2 = new HashSet<>(Arrays.asList(a2));
boolean same = s1.equals(s2);`,
    subConcepts: [
      { title: 'Set Comparison', description: '<b>Ignores order and duplicates</b>. {1,2,3} equals {3,1,2}. But {1,1,2} equals {1,2} with sets!' },
      { title: 'Sort + Compare', description: '<b>Arrays.sort() + Arrays.equals()</b> — respects duplicates. {1,1,2} ≠ {1,2} correctly.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Data Comparison', description: 'Compare database query results, API responses, or configuration arrays.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Duplicate Awareness', description: 'Choose Set for "same unique elements" or Sort for "exact same multiset".', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  }
];
