// src/app/data/leetcode-problems.ts
var LEETCODE_PROBLEMS = [
  {
    number: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    approach: [
      "Use a HashMap to store the numbers we have seen so far and their indices.",
      "Iterate through the array. For each number, calculate its complement (target - current number).",
      "Check if the complement exists in the HashMap. If it does, we found our pair! Return their indices.",
      "If it does not exist, add the current number and its index to the HashMap and continue."
    ],
    javaCode: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[] { numMap.get(complement), i };
            }
            numMap.put(nums[i], i);
        }
        return new int[] {};
    }
}`,
    timeComplexity: "O(N) - We traverse the list containing N elements only once. Each lookup in the table costs only O(1) time.",
    spaceComplexity: "O(N) - The extra space required depends on the number of items stored in the hash table, which stores at most N elements."
  },
  {
    number: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked Lists",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    approach: [
      "Use a dummy head node to simplify the linked list construction.",
      "Initialize a carry variable to 0.",
      "Loop through both linked lists until both are empty. At each step, add the values of the current nodes and the carry.",
      "The new digit to add to the result list is (sum % 10).",
      "The new carry is (sum / 10).",
      "Move to the next nodes. After the loop, if there is a remaining carry, append a new node with its value."
    ],
    javaCode: `class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode curr = dummyHead;
        int carry = 0;
        
        while (l1 != null || l2 != null) {
            int x = (l1 != null) ? l1.val : 0;
            int y = (l2 != null) ? l2.val : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
}`,
    timeComplexity: "O(max(M, N)) - Assume that M and N represent the length of l1 and l2 respectively. The algorithm iterates at most max(M,N) times.",
    spaceComplexity: "O(max(M, N)) - The length of the new list is at most max(M, N) + 1."
  },
  {
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Strings",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    approach: [
      "Use the Sliding Window technique with two pointers (left and right) and a HashMap.",
      "The HashMap stores the latest index we have seen for each character.",
      "Expand the window by moving the right pointer. If the character is already in the map, and its index is greater than or equal to the left pointer, we must shrink the window.",
      "Update the left pointer to the seen character's index + 1.",
      "Calculate the max length at each step as (right - left + 1)."
    ],
    javaCode: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int maxLength = 0;
        Map<Character, Integer> charMap = new HashMap<>();
        
        for (int right = 0, left = 0; right < n; right++) {
            char currentChar = s.charAt(right);
            if (charMap.containsKey(currentChar) && charMap.get(currentChar) >= left) {
                left = charMap.get(currentChar) + 1;
            }
            charMap.put(currentChar, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}`,
    timeComplexity: "O(N) - We visit each character at most twice (once by right pointer, once by left pointer).",
    spaceComplexity: "O(min(M, N)) - Where M is the size of the charset (e.g. 26, 128, 256) and N is the string length."
  },
  {
    number: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked Lists",
    description: "You are given the heads of two sorted linked lists list1 and list2.\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\nReturn the head of the merged linked list.",
    approach: [
      "Use a dummy node to act as the preceding node of the merged list.",
      "Use a current pointer to build the new list.",
      "Compare the values at the heads of list1 and list2. Attach the smaller node to current.next.",
      "Advance the pointer of the chosen list and the current pointer.",
      "When one list is exhausted, attach the remainder of the other list directly to current.next."
    ],
    javaCode: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        
        // At least one of l1 and l2 can still have nodes at this point
        current.next = list1 == null ? list2 : list1;
        
        return dummy.next;
    }
}`,
    timeComplexity: "O(N + M) - Because exactly one of l1 and l2 is incremented on each loop iteration.",
    spaceComplexity: "O(1) - The iterative approach only allocates a few pointers."
  },
  {
    number: 53,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\n\nA subarray is a contiguous part of an array.",
    approach: [
      "Use Kadane's Algorithm.",
      "Keep track of the current subarray sum and the max overall sum.",
      "Iterate through the array. For each element, the current sum is the maximum of the current element itself, or the current element plus the previous sum.",
      "Update the max overall sum if the current sum is greater than the max sum."
    ],
    javaCode: `class Solution {
    public int maxSubArray(int[] nums) {
        int currentSubarray = nums[0];
        int maxSubArray = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSubarray = Math.max(nums[i], currentSubarray + nums[i]);
            maxSubArray = Math.max(maxSubArray, currentSubarray);
        }
        
        return maxSubArray;
    }
}`,
    timeComplexity: "O(N) - We iterate through the array exactly once.",
    spaceComplexity: "O(1) - Only two integer variables are used."
  },
  {
    number: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Strings",
    description: "Given a string s, return the longest palindromic substring in s.",
    approach: [
      "Use Expand Around Center technique.",
      "A palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center.",
      "There are 2n - 1 such centers for a string of length n (the center could be a character or between two characters).",
      "Iterate through the string, and for each character, expand to check for both odd-length and even-length palindromes.",
      "Keep track of the max length and the starting index of the longest palindrome found."
    ],
    javaCode: `class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        int L = left, R = right;
        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}`,
    timeComplexity: "O(N^2) - Since expanding a palindrome around its center could take O(N) time, the overall complexity is O(N^2).",
    spaceComplexity: "O(1) - Constant space complexity since we only use a few integer variables."
  },
  {
    number: 15,
    title: "3Sum",
    difficulty: "Medium",
    category: "Arrays",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.",
    approach: [
      "Sort the array first to make it easier to avoid duplicates and to use the two-pointer approach.",
      "Iterate through the array, treating nums[i] as the fixed element of the triplet.",
      "Use a left pointer (i+1) and a right pointer (end of array) to find two numbers that sum to -nums[i].",
      "If the sum is 0, add the triplet to the result set and move both pointers, bypassing duplicates.",
      "If the sum is less than 0, move the left pointer to the right. If greater, move the right pointer to the left."
    ],
    javaCode: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 2; i++) {
            if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
                int lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
                while (lo < hi) {
                    if (nums[lo] + nums[hi] == sum) {
                        res.add(Arrays.asList(nums[i], nums[lo], nums[hi]));
                        while (lo < hi && nums[lo] == nums[lo + 1]) lo++;
                        while (lo < hi && nums[hi] == nums[hi - 1]) hi--;
                        lo++; hi--;
                    } else if (nums[lo] + nums[hi] < sum) lo++;
                    else hi--;
                }
            }
        }
        return res;
    }
}`,
    timeComplexity: "O(N^2) - Sorting takes O(N log N). The two-pointer search takes O(N) inside the loop, resulting in O(N^2).",
    spaceComplexity: "O(1) or O(N) - Depending on the sorting algorithm implementation space requirements."
  },
  {
    number: 20,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks",
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.\n\nAn input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.',
    approach: [
      "Use a Stack to keep track of the opening brackets.",
      "Iterate through the string character by character.",
      "If the character is an opening bracket, push it onto the stack.",
      "If the character is a closing bracket, check if the stack is empty. If it is, return false.",
      "If the stack is not empty, pop the top element. If the popped element does not match the closing bracket, return false.",
      "Finally, check if the stack is empty. If it is, return true; otherwise, return false."
    ],
    javaCode: `class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (char c : s.toCharArray()) {
            if (c == '(')
                stack.push(')');
            else if (c == '{')
                stack.push('}');
            else if (c == '[')
                stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c)
                return false;
        }
        return stack.isEmpty();
    }
}`,
    timeComplexity: "O(N) - We traverse the given string one character at a time.",
    spaceComplexity: "O(N) - In the worst case, we push all opening brackets to the stack."
  },
  {
    number: 49,
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Hashing",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    approach: [
      "Two strings are anagrams if and only if their character counts (or their sorted versions) are the same.",
      "Use a HashMap where the key is the sorted version of the string (or frequency array), and the value is a list of its anagrams.",
      "Iterate through each string, sort it to find its key.",
      "Add the original string to the list corresponding to that key in the HashMap.",
      "Return all values from the HashMap as the final grouped result."
    ],
    javaCode: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) return new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String keyStr = String.valueOf(ca);
            
            if (!map.containsKey(keyStr)) {
                map.put(keyStr, new ArrayList<>());
            }
            map.get(keyStr).add(s);
        }
        return new ArrayList<>(map.values());
    }
}`,
    timeComplexity: "O(N * K log K) - N is length of strs, K is max length of a string in strs. Sorting each string takes O(K log K).",
    spaceComplexity: "O(N * K) - The total information content stored in the Map."
  },
  {
    number: 121,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Arrays",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    approach: [
      "We need to find the largest difference between two elements such that the smaller element comes before the larger element.",
      "Maintain two variables: minprice (initialized to max integer value) and maxprofit (initialized to 0).",
      "Iterate through the prices. If we find a price smaller than minprice, update minprice.",
      "If the current price minus minprice is greater than maxprofit, update maxprofit.",
      "This guarantees we buy at the lowest possible price before selling at a respective high."
    ],
    javaCode: `class Solution {
    public int maxProfit(int[] prices) {
        int minprice = Integer.MAX_VALUE;
        int maxprofit = 0;
        
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minprice) {
                minprice = prices[i];
            } else if (prices[i] - minprice > maxprofit) {
                maxprofit = prices[i] - minprice;
            }
        }
        return maxprofit;
    }
}`,
    timeComplexity: "O(N) - Only a single pass over the array is needed.",
    spaceComplexity: "O(1) - Only two variables are used."
  },
  {
    number: 200,
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graphs",
    description: "Given an m x n 2D binary grid grid which represents a map of 1s (land) and 0s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    approach: [
      "Treat the 2D grid as an undirected graph.",
      "Scan the grid. If a node contains a 1, it is a root node that triggers a Depth First Search (DFS).",
      "During the DFS, set every visited node to 0 to mark it as visited and avoid counting it again.",
      "Count the number of root nodes that trigger DFS. This count will be the number of islands."
    ],
    javaCode: `class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }

        int num_islands = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    num_islands++;
                    dfs(grid, i, j);
                }
            }
        }

        return num_islands;
    }

    private void dfs(char[][] grid, int r, int c) {
        int nr = grid.length;
        int nc = grid[0].length;

        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == '0') {
            return;
        }

        grid[r][c] = '0'; // mark as visited
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
    }
}`,
    timeComplexity: "O(M * N) - Where M is the number of rows and N is the number of columns.",
    spaceComplexity: "O(M * N) - Worst case space complexity for the DFS call stack in case the grid map is filled with lands where DFS goes M * N deep."
  },
  {
    number: 206,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked Lists",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    approach: [
      "Use an iterative approach with three pointers: prev, curr, and next.",
      "Initialize prev as null and curr as head.",
      "Iterate through the list. At each node, save curr.next into next.",
      "Reverse the link by pointing curr.next to prev.",
      "Advance prev to curr, and curr to next.",
      "Return prev as the new head when curr becomes null."
    ],
    javaCode: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
}`,
    timeComplexity: "O(N) - Assume that N is the list length, the time complexity is O(N).",
    spaceComplexity: "O(1) - Only a few pointers are used."
  }
];

export {
  LEETCODE_PROBLEMS
};
//# sourceMappingURL=chunk-XKIWGTQY.js.map
