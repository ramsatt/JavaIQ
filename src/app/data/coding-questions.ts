import { Question } from './question.model';

export const CODING_QUESTIONS: Question[] = [
  {
    id: 301,
    category: 'Coding Questions',
    question: 'How do you reverse a string in Java?',
    answer: 'String class does not have a reverse() method. You can convert the string to a character array and iterate from end to start, or use StringBuilder.reverse().',
    asked_metadata: '15x Amazon, 12x Microsoft, 10x Google',
    code: `public String reverse(String in) {
    if (in == null) return null;
    StringBuilder out = new StringBuilder();
    char[] chars = in.toCharArray();
    for (int i = chars.length - 1; i >= 0; i--)
        out.append(chars[i]);
    return out.toString();
}`
  },
  {
    id: 302,
    category: 'Coding Questions',
    question: 'How do you swap two numbers without using a third variable?',
    answer: 'By using mathematical operations: a = a + b; b = a - b; a = a - b;',
    asked_metadata: '8x Oracle, 6x Facebook, 5x Apple',
    code: `int a = 10, b = 20;
a = a + b; // a=30
b = a - b; // b=10
a = a - b; // a=20`
  },
  {
    id: 303,
    category: 'Coding Questions',
    question: 'How do you check if a string contains vowels?',
    answer: 'You can use a regular expression or iterate through the string to check for characters a, e, i, o, u.',
    asked_metadata: '5x IBM, 4x SAP, 3x Cisco',
    code: `public boolean hasVowels(String input) {
    return input.toLowerCase().matches(".*[aeiou].*");
}`
  },
  {
    id: 304,
    category: 'Coding Questions',
    question: 'How do you check if a number is prime?',
    answer: 'A number is prime if it is divisible only by 1 and itself. You can check divisibility from 2 up to the square root of n.',
    asked_metadata: '10x Microsoft, 8x Adobe, 7x Salesforce',
    code: `public boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}`
  },
  {
    id: 305,
    category: 'Coding Questions',
    question: 'How do you print a Fibonacci sequence using recursion?',
    answer: 'The Fibonacci number is the sum of the two preceding ones. Use a base case for count <= 1.',
    asked_metadata: '12x Google, 10x Amazon, 8x Netflix',
    code: `public int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`
  },
  {
    id: 306,
    category: 'Coding Questions',
    question: 'How do you check if a list of integers contains only odd numbers?',
    answer: 'Iterate through the list and return false if any number is divisible by 2. Parallel streams can be used for large lists.',
    asked_metadata: '6x Twitter, 5x LinkedIn, 4x Uber',
    code: `public boolean onlyOdds(List<Integer> list) {
    return list.stream().allMatch(x -> x % 2 != 0);
}`
  },
  {
    id: 310,
    category: 'Coding Questions',
    question: 'How do you reverse a given number in Java?',
    answer: 'Use a while loop with modulo and division. Remainder gives the last digit, add it to result * 10, then divide the number by 10.',
    asked_metadata: '10x TCS, 8x CTS, 7x Infosys',
    code: `int num = 12345, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = (res * 10) + rem;
    num = num / 10;
}
System.out.println("Reverse: " + res);`
  },
  {
    id: 311,
    category: 'Coding Questions',
    question: 'How do you check if a number is a Palindrome?',
    answer: 'Reverse the number and check if the reversed number is equal to the original number.',
    asked_metadata: '12x Wipro, 10x HCL, 8x Tech Mahindra',
    code: `int num = 121, original = num, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = (res * 10) + rem;
    num = num / 10;
}
boolean isPal = (original == res);`
  },
  {
    id: 312,
    category: 'Coding Questions',
    question: 'How do you check if a number is an Armstrong number?',
    answer: 'An Armstrong number is a number that is equal to the sum of cubes of its digits (for 3-digit numbers).',
    asked_metadata: '6x Zoho, 5x Freshworks, 4x Honeywell',
    code: `int num = 153, original = num, res = 0;
while (num > 0) {
    int rem = num % 10;
    res = res + (rem * rem * rem);
    num = num / 10;
}
boolean isArmstrong = (original == res);`
  },
  {
    id: 313,
    category: 'Coding Questions',
    question: 'How do you find the sum of digits of a number?',
    answer: 'Extract each digit using modulo 10 and keep adding them to a sum variable.',
    asked_metadata: '7x Mindtree, 6x LTI, 5x Capgemini',
    code: `int num = 153, sum = 0;
while (num > 0) {
    sum += num % 10;
    num /= 10;
}`
  },
  {
    id: 314,
    category: 'Coding Questions',
    question: 'How do you find the Factorial of a number using a loop?',
    answer: 'Iterate from 1 to N and keep multiplying each number with the previous result.',
    asked_metadata: '15x TCS, 12x Accenture, 10x IBM',
    code: `int n = 5, fact = 1;
for (int i = 1; i <= n; i++) {
    fact *= i;
}`
  },
  {
    id: 315,
    category: 'Coding Questions',
    question: 'How do you reverse each word in a string?',
    answer: 'Split the string by spaces, reverse each individual word, and join them back.',
    asked_metadata: '10x Amazon, 8x Flipkart, 7x Walmart',
    code: `String str = "Hello Java", res = "";
String[] words = str.split(" ");
for (String w : words) {
    String revWord = new StringBuilder(w).reverse().toString();
    res += revWord + " ";
}`
  },
  {
    id: 316,
    category: 'Coding Questions',
    question: 'How do you capitalize the first letter of each word in a string?',
    answer: 'Split the string, take the first char of each word, convert to uppercase, and append the rest of the string.',
    asked_metadata: '5x Myntra, 4x Paytm, 3x Zomato',
    code: `String str = "java class", res = "";
String[] words = str.split(" ");
for (String s : words) {
    res += Character.toUpperCase(s.charAt(0)) + s.substring(1) + " ";
}`
  },
  {
    id: 317,
    category: 'Coding Questions',
    question: 'How do you remove duplicate characters from a string?',
    answer: 'Use a LinkedHashSet to maintain unique characters while preserving order.',
    asked_metadata: '10x Microsoft, 8x Oracle, 7x JP Morgan',
    code: `String str = "programming", res = "";
LinkedHashSet<Character> set = new LinkedHashSet<>();
for (char c : str.toCharArray()) set.add(c);
for (char c : set) res += c;`
  },
  {
    id: 318,
    category: 'Coding Questions',
    question: 'How do you check if two strings are Anagrams?',
    answer: 'Convert strings to char arrays, sort them, and check if they are equal.',
    asked_metadata: '12x Google, 10x Amazon, 8x Goldman Sachs',
    code: `char[] c1 = s1.toCharArray();
char[] c2 = s2.toCharArray();
Arrays.sort(c1);
Arrays.sort(c2);
boolean isAnagram = Arrays.equals(c1, c2);`
  },
  {
    id: 319,
    category: 'Coding Questions',
    question: 'How do you find the frequency of each character in a string?',
    answer: 'Use a Map where the character is the key and its count is the value.',
    asked_metadata: '8x Cisco, 6x NetApp, 5x VMware',
    code: `Map<Character, Integer> map = new LinkedHashMap<>();
for (char c : str.toCharArray()) {
    map.put(c, map.getOrDefault(c, 0) + 1);
}`
  },
  {
    id: 321,
    category: 'Coding Questions',
    question: 'How do you reverse a Linked List in Java?',
    answer: 'You can use the descendingIterator() for a quick reversal, or implement a manual pointer swap logic for custom lists.',
    asked_metadata: '15x Amazon, 12x Microsoft, 10x Adobe',
    code: `LinkedList<Integer> l1 = new LinkedList<>();
LinkedList<Integer> reversed = new LinkedList<>();
l1.descendingIterator().forEachRemaining(reversed::add);`
  },
  {
    id: 322,
    category: 'Coding Questions',
    question: 'How do you implement Binary Search?',
    answer: 'The array must be sorted. Compare the key with the middle element; if it matches, return index. If key is smaller, search left half; otherwise, search right half.',
    asked_metadata: '20x Google, 18x Facebook, 15x Apple',
    code: `int binarySearch(int[] arr, int key) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },
  {
    id: 323,
    category: 'Coding Questions',
    question: 'How do you sort a HashMap by its values?',
    answer: 'Convert the entry set to a list, sort the list using a comparator on values, and put them into a LinkedHashMap to maintain order.',
    asked_metadata: '8x Uber, 7x Lyft, 6x DoorDash',
    code: `List<Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
list.sort((x, y) -> x.getValue().compareTo(y.getValue()));
Map<String, Integer> sorted = new LinkedHashMap<>();
for (Entry<String, Integer> e : list) sorted.put(e.getKey(), e.getValue());`
  },
  {
    id: 327,
    category: 'Coding Questions',
    question: 'How do you check if two arrays contain the same elements?',
    answer: 'Create a Set from both arrays and compare the sets. If sizes match and all elements of one are in the other, they are the same.',
    asked_metadata: '6x Qualtrics, 5x ServiceNow, 4x Workday',
    code: `Set<Object> s1 = new HashSet<>(Arrays.asList(a1));
Set<Object> s2 = new HashSet<>(Arrays.asList(a2));
boolean same = s1.equals(s2);`
  }
];
