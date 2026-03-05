import {
  AdGateService
} from "./chunk-JEJRJ2G2.js";
import "./chunk-4DYJ5SOT.js";
import "./chunk-ZI6SYS5B.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  ActivatedRoute
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L6VISU4K.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/data/coding-problems.ts
var CODING_CATEGORIES = {
  "arrays": {
    id: "arrays",
    title: "Arrays & Strings",
    description: "Fundamental data structures. Master two pointers, sliding window, and prefix sums.",
    themeColor: "#3b82f6",
    problems: [
      {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
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
        spaceComplexity: "O(N) - The extra space required depends on the number of items stored in the hash table, which stores at most N elements.",
        companies: ["Amazon", "Google", "Apple", "Microsoft"]
      },
      {
        id: "best-time-buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        javaCode: `class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }
        return maxProfit;
    }
}`,
        timeComplexity: "O(N) - Single pass through the array.",
        spaceComplexity: "O(1) - Only two variables are used.",
        companies: ["Amazon", "Microsoft", "Facebook", "Bloomberg"]
      },
      {
        id: "longest-substring",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
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
        spaceComplexity: "O(min(M, N)) - Where M is the size of the charset (e.g. 26, 128, 256) and N is the string length.",
        companies: ["Amazon", "Meta", "Google", "Apple"]
      },
      {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        javaCode: `class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        int[] counter = new int[26];
        for (int i = 0; i < s.length(); i++) {
            counter[s.charAt(i) - 'a']++;
            counter[t.charAt(i) - 'a']--;
        }
        for (int count : counter) {
            if (count != 0) {
                return false;
            }
        }
        return true;
    }
}`,
        timeComplexity: "O(N) - where N is the length of strings s and t.",
        spaceComplexity: "O(1) - We use an array of size 26, which is constant space.",
        companies: ["Google", "Facebook", "Amazon"]
      },
      {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        javaCode: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) return new ArrayList<>();
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String keyStr = String.valueOf(ca);
            if (!map.containsKey(keyStr)) map.put(keyStr, new ArrayList<>());
            map.get(keyStr).add(s);
        }
        return new ArrayList<>(map.values());
    }
}`,
        timeComplexity: "O(N * K log K) - where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then, we sort each string in O(K log K) time.",
        spaceComplexity: "O(N * K) - the total information content stored in the answer.",
        companies: ["Amazon", "Microsoft", "Uber"]
      },
      {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        javaCode: `class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0;
        int left = 0; 
        int right = height.length - 1;
        while (left < right) {
            int width = right - left;
            maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * width);
            if (height[left] <= height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxarea;
    }
}`,
        timeComplexity: "O(N) - Single pass with two pointers.",
        spaceComplexity: "O(1) - Constant extra space used.",
        companies: ["Amazon", "Google", "Meta", "Adobe"]
      }
    ]
  },
  "linked-lists": {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Pointer manipulation and sequence operations. Master slow/fast pointers and reversal.",
    themeColor: "#06b6d4",
    problems: [
      {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Easy",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
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
        spaceComplexity: "O(1) - We only use constant extra space.",
        companies: ["Apple", "Amazon", "Microsoft", "Meta"]
      },
      {
        id: "linked-list-cycle",
        title: "Linked List Cycle",
        difficulty: "Easy",
        description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
        javaCode: `public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }
}`,
        timeComplexity: "O(N) - In the worst case, the fast pointer might traverse the list twice.",
        spaceComplexity: "O(1) - Floyd's Cycle Finding Algorithm only requires two pointers.",
        companies: ["Microsoft", "Amazon", "Apple"]
      },
      {
        id: "merge-two-sorted-lists",
        title: "Merge Two Sorted Lists",
        difficulty: "Easy",
        description: "You are given the heads of two sorted linked lists list1 and list2.\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\nReturn the head of the merged linked list.",
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
        spaceComplexity: "O(1) - The iterative approach only allocates a few pointers.",
        companies: ["Amazon", "Microsoft", "Apple", "LinkedIn"]
      },
      {
        id: "remove-nth-node",
        title: "Remove Nth Node From End of List",
        difficulty: "Medium",
        description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
        javaCode: `class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy;
        ListNode second = dummy;

        for (int i = 1; i <= n + 1; i++) {
            first = first.next;
        }

        while (first != null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
        return dummy.next;
    }
}`,
        timeComplexity: "O(L) - The algorithm makes one traversal of the list of L nodes.",
        spaceComplexity: "O(1) - We only used constant extra space.",
        companies: ["Facebook", "Amazon", "Apple"]
      }
    ]
  },
  "trees": {
    id: "trees",
    title: "Trees & Graphs",
    description: "Non-linear data structures. Master BFS, DFS, and topological sort.",
    themeColor: "#10b981",
    problems: [
      {
        id: "maximum-depth",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        javaCode: `class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            int leftDepth = maxDepth(root.left);
            int rightDepth = maxDepth(root.right);
            return Math.max(leftDepth, rightDepth) + 1;
        }
    }
}`,
        timeComplexity: "O(N) - We visit each node exactly once.",
        spaceComplexity: "O(N) - In the worst case (completely unbalanced tree), the recursion stack scales with N.",
        companies: ["Apple", "LinkedIn", "Amazon"]
      },
      {
        id: "invert-binary-tree",
        title: "Invert Binary Tree",
        difficulty: "Easy",
        description: "Given the root of a binary tree, invert the tree, and return its root.",
        javaCode: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        
        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        
        root.left = right;
        root.right = left;
        
        return root;
    }
}`,
        timeComplexity: "O(N) - We visit each node exactly once.",
        spaceComplexity: "O(H) - O(h) function calls will be placed on the stack in the worst case, where h is the height of the tree.",
        companies: ["Google", "Amazon", "Meta"]
      },
      {
        id: "same-tree",
        title: "Same Tree",
        difficulty: "Easy",
        description: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
        javaCode: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    }
}`,
        timeComplexity: "O(N) - Where N is a number of nodes in the tree, since one visits each node exactly once.",
        spaceComplexity: "O(log(N)) in the best case of completely balanced tree and O(N) in the worst case of completely unbalanced tree.",
        companies: ["Amazon", "Google", "Microsoft"]
      },
      {
        id: "lowest-common-ancestor-bst",
        title: "Lowest Common Ancestor of a BST",
        difficulty: "Medium",
        description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
        javaCode: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        int parentVal = root.val;
        int pVal = p.val;
        int qVal = q.val;

        if (pVal > parentVal && qVal > parentVal) {
            return lowestCommonAncestor(root.right, p, q);
        } else if (pVal < parentVal && qVal < parentVal) {
            return lowestCommonAncestor(root.left, p, q);
        } else {
            return root;
        }
    }
}`,
        timeComplexity: "O(N) - In the worst case we might be visiting all nodes of the BST.",
        spaceComplexity: "O(N) - Typically O(log(N)) for a balanced BST, but in the worst case (skewed tree) it will be O(N) for the recursion stack.",
        companies: ["LinkedIn", "Facebook", "Amazon"]
      }
    ]
  },
  "dp": {
    id: "dp",
    title: "Dynamic Programming",
    description: "Optimization problems. Master memoization and tabulation techniques.",
    themeColor: "#8b5cf6",
    problems: [
      {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
        description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        javaCode: `class Solution {
    public int climbStairs(int n) {
        if (n == 1) return 1;
        
        int first = 1;
        int second = 2;
        
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }
        
        return second;
    }
}`,
        timeComplexity: "O(N) - Single loop up to n.",
        spaceComplexity: "O(1) - Constant space used for tracking the previous two sequence numbers.",
        companies: ["Apple", "Amazon", "Google"]
      },
      {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
        description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
        javaCode: `class Solution {
    public int coinChange(int[] coins, int amount) {
        int max = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, max);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`,
        timeComplexity: "O(S*n) - Where S is the amount, and n is denomination count. On each step the algorithm finds the next dp value which requires n iterations.",
        spaceComplexity: "O(S) - We use extra space for the memoization table of size S.",
        companies: ["Amazon", "Bloomberg", "Apple"]
      },
      {
        id: "longest-increasing-subsequence",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        javaCode: `class Solution {
    public int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;
        for (int x : nums) {
            int i = 0, j = size;
            while (i != j) {
                int m = (i + j) / 2;
                if (tails[m] < x)
                    i = m + 1;
                else
                    j = m;
            }
            tails[i] = x;
            if (i == size) ++size;
        }
        return size;
    }
}`,
        timeComplexity: "O(N log N) - Binary search is used per element in the tails array.",
        spaceComplexity: "O(N) - Array of size N is used.",
        companies: ["Amazon", "Microsoft", "Google"]
      }
    ]
  },
  "sorting": {
    id: "sorting",
    title: "Sorting & Searching",
    description: "Master Binary Search and classic sorting algorithms.",
    themeColor: "#f59e0b",
    problems: [
      {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Easy",
        description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
        javaCode: `class Solution {
    public int search(int[] nums, int target) {
        int pivot, left = 0, right = nums.length - 1;
        while (left <= right) {
            pivot = left + (right - left) / 2;
            if (nums[pivot] == target) return pivot;
            if (target < nums[pivot]) right = pivot - 1;
            else left = pivot + 1;
        }
        return -1;
    }
}`,
        timeComplexity: "O(log N) - Time complexity of standard Binary Search.",
        spaceComplexity: "O(1) - Constant space used for pointers.",
        companies: ["Microsoft", "Apple", "Amazon", "Meta"]
      },
      {
        id: "search-in-rotated-sorted-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
        javaCode: `class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[left] <= nums[mid]) { // Left is sorted
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // Right is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}`,
        timeComplexity: "O(log N) - Binary search modified to handle the rotation.",
        spaceComplexity: "O(1) - Constant space used.",
        companies: ["Amazon", "Microsoft", "LinkedIn"]
      }
    ]
  },
  "stacks": {
    id: "stacks",
    title: "Stacks & Queues",
    description: "LIFO & FIFO Data structures. Monotonic stacks and priority queues.",
    themeColor: "#f97316",
    problems: [
      {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
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
        timeComplexity: "O(N) - We simply traverse the given string one character at a time and push/pop operations on a stack take O(1) time.",
        spaceComplexity: "O(N) - Worst case scenario is when all characters are opening brackets, pushing them all onto the stack.",
        companies: ["Amazon", "Microsoft", "Google", "Spotify"]
      },
      {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "Medium",
        description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
        javaCode: `class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
                int prevIndex = stack.pop();
                answer[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return answer;
    }
}`,
        timeComplexity: "O(N) - Every element is pushed and popped at most once.",
        spaceComplexity: "O(N) - In the worst case, the stack can grow up to size N (decreasing temperatures).",
        companies: ["Amazon", "LinkedIn", "Meta"]
      }
    ]
  },
  "recursion": {
    id: "recursion",
    title: "Recursion & Backtracking",
    description: "Solve problems by breaking them into smaller instances.",
    themeColor: "#ec4899",
    problems: [
      {
        id: "subsets",
        title: "Subsets",
        difficulty: "Medium",
        description: "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
        javaCode: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> tempList, int[] nums, int start) {
        result.add(new ArrayList<>(tempList));
        for (int i = start; i < nums.length; i++) {
            tempList.add(nums[i]);
            backtrack(result, tempList, nums, i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }
}`,
        timeComplexity: "O(N * 2^N) - Generate all subsets and then copy them into output list.",
        spaceComplexity: "O(N) - Space used by recursion stack.",
        companies: ["Amazon", "Apple", "Meta"]
      }
    ]
  },
  "hashing": {
    id: "hashing",
    title: "Hashing",
    description: "Extremely fast lookups and frequency counting.",
    themeColor: "#6366f1",
    problems: [
      {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
        description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        javaCode: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}`,
        timeComplexity: "O(N) - We do search() and insert() for N elements and each takes O(1) in average.",
        spaceComplexity: "O(N) - Space used by a hash set to store the N elements.",
        companies: ["Amazon", "Apple", "Microsoft"]
      }
    ]
  }
};

// src/app/features/coding-questions/cq-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CqDetailComponent_Conditional_8_For_12_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comp_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", comp_r4);
  }
}
function CqDetailComponent_Conditional_8_For_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 30);
  }
  if (rf & 2) {
    const prob_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("fa-chevron-down", ctx_r2.expandedId() !== prob_r2.id)("fa-chevron-up", ctx_r2.expandedId() === prob_r2.id);
  }
}
function CqDetailComponent_Conditional_8_For_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 27);
  }
}
function CqDetailComponent_Conditional_8_For_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 31)(2, "h4", 32);
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275text(4, " Problem Statement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36)(9, "span");
    \u0275\u0275element(10, "i", 37);
    \u0275\u0275text(11, " Code Solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 38);
    \u0275\u0275element(13, "i", 39);
    \u0275\u0275text(14, " Copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "pre", 40)(16, "code");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 41)(19, "div", 42)(20, "div", 43);
    \u0275\u0275element(21, "i", 44);
    \u0275\u0275text(22, " Time Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 45);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 42)(26, "div", 43);
    \u0275\u0275element(27, "i", 46);
    \u0275\u0275text(28, " Space Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 45);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prob_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(prob_r2.description);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(prob_r2.javaCode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(prob_r2.timeComplexity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(prob_r2.spaceComplexity);
  }
}
function CqDetailComponent_Conditional_8_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function CqDetailComponent_Conditional_8_For_12_Template_div_click_1_listener() {
      const prob_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleExpand(prob_r2.id));
    });
    \u0275\u0275element(2, "div", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "h3", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275repeaterCreate(10, CqDetailComponent_Conditional_8_For_12_For_11_Template, 3, 1, "span", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275conditionalCreate(13, CqDetailComponent_Conditional_8_For_12_Conditional_13_Template, 1, 4, "i", 26)(14, CqDetailComponent_Conditional_8_For_12_Conditional_14_Template, 1, 0, "i", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, CqDetailComponent_Conditional_8_For_12_Conditional_15_Template, 31, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prob_r2 = ctx.$implicit;
    const data_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("expanded", ctx_r2.expandedId() === prob_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", data_r5.themeColor);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(prob_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(prob_r2.difficulty.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", prob_r2.difficulty, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(prob_r2.companies);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isUnlocked(prob_r2.id) || ctx_r2.expandedId() === prob_r2.id ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.expandedId() === prob_r2.id ? 15 : -1);
  }
}
function CqDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "span", 10);
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275text(5, " Topic Focus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275repeaterCreate(11, CqDetailComponent_Conditional_8_For_12_Template, 16, 10, "div", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", data_r5.themeColor)("border-color", data_r5.themeColor);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(data_r5.problems);
  }
}
function CqDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9)(3, "h1", 12);
    \u0275\u0275text(4, "Coming Soon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6, "We're adding new problems!");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 47);
    \u0275\u0275element(8, "i", 48);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Problems for this section will be available soon!");
    \u0275\u0275elementEnd()();
  }
}
var CqDetailComponent = class _CqDetailComponent {
  route = inject(ActivatedRoute);
  adGate = inject(AdGateService);
  // The current category ID (e.g. 'arrays')
  categoryId = signal("", ...ngDevMode ? [{ debugName: "categoryId" }] : []);
  // Which problem is currently expanded
  expandedId = signal(null, ...ngDevMode ? [{ debugName: "expandedId" }] : []);
  // Compute the category data based on the route param
  categoryData = computed(() => {
    return CODING_CATEGORIES[this.categoryId()] || null;
  }, ...ngDevMode ? [{ debugName: "categoryData" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId.set(params.get("id") ?? "");
      this.expandedId.set(null);
    });
  }
  isUnlocked(id) {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`cq::${id}`);
  }
  async toggleExpand(id) {
    if (this.expandedId() === id) {
      this.expandedId.set(null);
    } else {
      const itemId = `cq::${id}`;
      if (!this.adGate.isItemUnlocked(itemId)) {
        const allowed = await this.adGate.unlockItemWithAd(itemId, "this coding problem");
        if (!allowed)
          return;
      }
      this.expandedId.set(id);
      this.adGate.onContentCompleted();
    }
  }
  static \u0275fac = function CqDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CqDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CqDetailComponent, selectors: [["app-cq-detail"]], decls: 10, vars: 1, consts: [["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["defaultHref", "/coding-questions", "text", "", "color", "light"], [1, "brand-title"], [1, "tut-content"], [1, "page-container"], [1, "hero"], [1, "hero-glow"], [1, "hero-content"], [1, "hero-badge"], [1, "fa-solid", "fa-layer-group", "hero-badge-icon"], [1, "title"], [1, "subtitle"], [1, "list"], [1, "problem-card", 3, "expanded"], [1, "problem-card"], [1, "problem-header", 3, "click"], [1, "accent-line"], [1, "problem-header-content"], [1, "problem-title-row"], [1, "problem-title"], [1, "difficulty-badge"], [1, "problem-meta"], [1, "company-chip"], [1, "expand-icon"], [1, "fa-solid", 3, "fa-chevron-down", "fa-chevron-up"], [1, "fa-solid", "fa-lock", 2, "color", "#f59e0b", "font-size", "11px"], [1, "problem-content"], [1, "fa-solid", "fa-building"], [1, "fa-solid"], [1, "desc-section"], [1, "section-title"], [1, "fa-solid", "fa-align-left"], [1, "desc-text"], [1, "java-section"], [1, "code-header"], [1, "fa-brands", "fa-java", "text-orange-400"], [1, "copy-btn"], [1, "fa-regular", "fa-copy"], [1, "code-block"], [1, "complexity-section"], [1, "complexity-box"], [1, "comp-label"], [1, "fa-solid", "fa-stopwatch"], [1, "comp-val"], [1, "fa-solid", "fa-memory"], [1, "empty-state"], [1, "fa-solid", "fa-hammer", "mb-4", "text-3xl"]], template: function CqDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4);
      \u0275\u0275text(5, "JavaIQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 5)(7, "div", 6);
      \u0275\u0275conditionalCreate(8, CqDetailComponent_Conditional_8_Template, 13, 6)(9, CqDetailComponent_Conditional_9_Template, 11, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(8);
      \u0275\u0275conditional((tmp_0_0 = ctx.categoryData()) ? 8 : 9, tmp_0_0);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap";\n\n\n\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  padding: 32px 20px 48px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.15) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid;\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 12px;\n  font-size: 1.85rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #64748b;\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.problem-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.problem-card.expanded[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.problem-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 18px 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.accent-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  border-radius: 0 3px 3px 0;\n  opacity: 0.7;\n}\n.problem-header-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding-left: 12px;\n}\n.problem-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.problem-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.difficulty-badge.easy[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.problem-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.company-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.company-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n  padding-left: 12px;\n  transition: transform 0.3s;\n}\n.problem-content[_ngcontent-%COMP%] {\n  padding: 0 16px 20px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.desc-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.desc-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.java-section[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.code-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px;\n  overflow-x: auto;\n}\n.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Fira Code", monospace;\n  font-size: 0.8rem;\n  color: #e2e8f0;\n  line-height: 1.5;\n}\n.complexity-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n}\n.complexity-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comp-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.comp-val[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=cq-detail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CqDetailComponent, [{
    type: Component,
    args: [{ selector: "app-cq-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/coding-questions" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <div class="page-container">
        @if (categoryData(); as data) {
          <!-- Premium Centered Hero for coding question category -->
          <div class="hero">
            <div class="hero-glow"></div>
            <div class="hero-content">
              <span class="hero-badge" [style.color]="data.themeColor" [style.borderColor]="data.themeColor">
                <i class="fa-solid fa-layer-group hero-badge-icon"></i>
                Topic Focus
              </span>
              <h1 class="title">{{ data.title }}</h1>
              <p class="subtitle">{{ data.description }}</p>
            </div>
          </div>

          <div class="list">
            @for (prob of data.problems; track prob.id) {
              <div class="problem-card" [class.expanded]="expandedId() === prob.id">
                <!-- Header (Clickable) -->
                <div class="problem-header" (click)="toggleExpand(prob.id)">
                   <div class="accent-line" [style.background]="data.themeColor"></div>
                   
                   <div class="problem-header-content">
                     <div class="problem-title-row">
                       <h3 class="problem-title">{{ prob.title }}</h3>
                       <span class="difficulty-badge" [class]="prob.difficulty.toLowerCase()">
                         {{ prob.difficulty }}
                       </span>
                     </div>
                     <div class="problem-meta">
                       @for (comp of prob.companies; track comp) {
                         <span class="company-chip"><i class="fa-solid fa-building"></i> {{ comp }}</span>
                       }
                     </div>
                   </div>

                   <div class="expand-icon">
                     @if (isUnlocked(prob.id) || expandedId() === prob.id) {
                       <i class="fa-solid" [class.fa-chevron-down]="expandedId() !== prob.id" [class.fa-chevron-up]="expandedId() === prob.id"></i>
                     } @else {
                       <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                     }
                   </div>
                </div>

                <!-- Expanded Content -->
                @if (expandedId() === prob.id) {
                  <div class="problem-content">
                    <div class="desc-section">
                      <h4 class="section-title"><i class="fa-solid fa-align-left"></i> Problem Statement</h4>
                      <div class="desc-text">{{ prob.description }}</div>
                    </div>

                    <div class="java-section">
                      <div class="code-header">
                        <span><i class="fa-brands fa-java text-orange-400"></i> Code Solution</span>
                        <button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button>
                      </div>
                      <pre class="code-block"><code>{{ prob.javaCode }}</code></pre>
                    </div>

                    <div class="complexity-section">
                      <div class="complexity-box">
                        <div class="comp-label"><i class="fa-solid fa-stopwatch"></i> Time Complexity</div>
                        <div class="comp-val">{{ prob.timeComplexity }}</div>
                      </div>
                      <div class="complexity-box">
                        <div class="comp-label"><i class="fa-solid fa-memory"></i> Space Complexity</div>
                        <div class="comp-val">{{ prob.spaceComplexity }}</div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        } @else {
          <div class="hero">
            <div class="hero-glow"></div>
            <div class="hero-content">
              <h1 class="title">Coming Soon</h1>
              <p class="subtitle">We're adding new problems!</p>
            </div>
          </div>
          <div class="empty-state">
             <i class="fa-solid fa-hammer mb-4 text-3xl"></i>
             <p>Problems for this section will be available soon!</p>
          </div>
        }
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap";\n\n/* angular:styles/component:css;9d8e6c30a81a530d42614a01b2318a63bce6f5ae0922a2a06fe9b7539e865662;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/coding-questions/cq-detail.component.ts */\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.page-container {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  padding: 32px 20px 48px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow {\n  position: absolute;\n  top: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.15) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid;\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.title {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 12px;\n  font-size: 1.85rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle {\n  font-family: "Inter", sans-serif;\n  margin: 0 0;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #64748b;\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.problem-card {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.problem-card.expanded {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.problem-header {\n  display: flex;\n  align-items: center;\n  padding: 18px 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.accent-line {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  border-radius: 0 3px 3px 0;\n  opacity: 0.7;\n}\n.problem-header-content {\n  flex: 1;\n  min-width: 0;\n  padding-left: 12px;\n}\n.problem-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.problem-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n}\n.difficulty-badge {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.difficulty-badge.easy {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.problem-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.company-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.company-chip i {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.expand-icon {\n  color: #64748b;\n  font-size: 0.9rem;\n  padding-left: 12px;\n  transition: transform 0.3s;\n}\n.problem-content {\n  padding: 0 16px 20px 24px;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  animation: fadeIn 0.3s ease-out forwards;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.desc-section {\n  margin-top: 20px;\n  margin-bottom: 24px;\n}\n.section-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.section-title i {\n  color: #8b5cf6;\n}\n.desc-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.java-section {\n  background: #0d1117;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.code-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 8px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.copy-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.copy-btn:hover {\n  color: #fff;\n}\n.code-block {\n  margin: 0;\n  padding: 16px;\n  overflow-x: auto;\n}\n.code-block code {\n  font-family: "Fira Code", monospace;\n  font-size: 0.8rem;\n  color: #e2e8f0;\n  line-height: 1.5;\n}\n.complexity-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n}\n.complexity-box {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comp-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.comp-val {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .problem-card {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\n:host-context(html:not(.dark)) .title {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .subtitle {\n  color: #52665A;\n}\n/*# sourceMappingURL=cq-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CqDetailComponent, { className: "CqDetailComponent", filePath: "src/app/features/coding-questions/cq-detail.component.ts", lineNumber: 451 });
})();
export {
  CqDetailComponent
};
//# sourceMappingURL=chunk-OAPHCK6Q.js.map
