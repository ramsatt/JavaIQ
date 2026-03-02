export interface CodingProblem {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    description: string;
    javaCode: string;
    timeComplexity: string;
    spaceComplexity: string;
    companies: string[];
}

export interface CodingCategoryData {
    id: string;
    title: string;
    description: string;
    themeColor: string;
    problems: CodingProblem[];
}

export const CODING_CATEGORIES: Record<string, CodingCategoryData> = {
    'arrays': {
        id: 'arrays',
        title: 'Arrays & Strings',
        description: 'Fundamental data structures. Master two pointers, sliding window, and prefix sums.',
        themeColor: '#3b82f6',
        problems: [
            {
                id: 'two-sum',
                title: 'Two Sum',
                difficulty: 'Easy',
                description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
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
                timeComplexity: 'O(N) - We traverse the list containing N elements only once. Each lookup in the table costs only O(1) time.',
                spaceComplexity: 'O(N) - The extra space required depends on the number of items stored in the hash table, which stores at most N elements.',
                companies: ['Amazon', 'Google', 'Apple', 'Microsoft']
            },
            {
                id: 'best-time-buy-sell-stock',
                title: 'Best Time to Buy and Sell Stock',
                difficulty: 'Easy',
                description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
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
                timeComplexity: 'O(N) - Single pass through the array.',
                spaceComplexity: 'O(1) - Only two variables are used.',
                companies: ['Amazon', 'Microsoft', 'Facebook', 'Bloomberg']
            },
            {
                id: 'longest-substring',
                title: 'Longest Substring Without Repeating Characters',
                difficulty: 'Medium',
                description: 'Given a string s, find the length of the longest substring without repeating characters.',
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
                timeComplexity: 'O(N) - We visit each character at most twice (once by right pointer, once by left pointer).',
                spaceComplexity: 'O(min(M, N)) - Where M is the size of the charset (e.g. 26, 128, 256) and N is the string length.',
                companies: ['Amazon', 'Meta', 'Google', 'Apple']
            },
            {
                id: 'valid-anagram',
                title: 'Valid Anagram',
                difficulty: 'Easy',
                description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
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
                timeComplexity: 'O(N) - where N is the length of strings s and t.',
                spaceComplexity: 'O(1) - We use an array of size 26, which is constant space.',
                companies: ['Google', 'Facebook', 'Amazon']
            },
            {
                id: 'group-anagrams',
                title: 'Group Anagrams',
                difficulty: 'Medium',
                description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
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
                timeComplexity: 'O(N * K log K) - where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then, we sort each string in O(K log K) time.',
                spaceComplexity: 'O(N * K) - the total information content stored in the answer.',
                companies: ['Amazon', 'Microsoft', 'Uber']
            },
            {
                id: 'container-with-most-water',
                title: 'Container With Most Water',
                difficulty: 'Medium',
                description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.',
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
                timeComplexity: 'O(N) - Single pass with two pointers.',
                spaceComplexity: 'O(1) - Constant extra space used.',
                companies: ['Amazon', 'Google', 'Meta', 'Adobe']
            }
        ]
    },
    'linked-lists': {
        id: 'linked-lists',
        title: 'Linked Lists',
        description: 'Pointer manipulation and sequence operations. Master slow/fast pointers and reversal.',
        themeColor: '#06b6d4',
        problems: [
            {
                id: 'reverse-linked-list',
                title: 'Reverse Linked List',
                difficulty: 'Easy',
                description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
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
                timeComplexity: 'O(N) - Assume that N is the list length, the time complexity is O(N).',
                spaceComplexity: 'O(1) - We only use constant extra space.',
                companies: ['Apple', 'Amazon', 'Microsoft', 'Meta']
            },
            {
                id: 'linked-list-cycle',
                title: 'Linked List Cycle',
                difficulty: 'Easy',
                description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
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
                timeComplexity: 'O(N) - In the worst case, the fast pointer might traverse the list twice.',
                spaceComplexity: 'O(1) - Floyd\'s Cycle Finding Algorithm only requires two pointers.',
                companies: ['Microsoft', 'Amazon', 'Apple']
            },
            {
                id: 'merge-two-sorted-lists',
                title: 'Merge Two Sorted Lists',
                difficulty: 'Easy',
                description: 'You are given the heads of two sorted linked lists list1 and list2.\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\nReturn the head of the merged linked list.',
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
                timeComplexity: 'O(N + M) - Because exactly one of l1 and l2 is incremented on each loop iteration.',
                spaceComplexity: 'O(1) - The iterative approach only allocates a few pointers.',
                companies: ['Amazon', 'Microsoft', 'Apple', 'LinkedIn']
            },
            {
                id: 'remove-nth-node',
                title: 'Remove Nth Node From End of List',
                difficulty: 'Medium',
                description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
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
                timeComplexity: 'O(L) - The algorithm makes one traversal of the list of L nodes.',
                spaceComplexity: 'O(1) - We only used constant extra space.',
                companies: ['Facebook', 'Amazon', 'Apple']
            }
        ]
    },
    'trees': {
        id: 'trees',
        title: 'Trees & Graphs',
        description: 'Non-linear data structures. Master BFS, DFS, and topological sort.',
        themeColor: '#10b981',
        problems: [
            {
                id: 'maximum-depth',
                title: 'Maximum Depth of Binary Tree',
                difficulty: 'Easy',
                description: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
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
                timeComplexity: 'O(N) - We visit each node exactly once.',
                spaceComplexity: 'O(N) - In the worst case (completely unbalanced tree), the recursion stack scales with N.',
                companies: ['Apple', 'LinkedIn', 'Amazon']
            },
            {
                id: 'invert-binary-tree',
                title: 'Invert Binary Tree',
                difficulty: 'Easy',
                description: 'Given the root of a binary tree, invert the tree, and return its root.',
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
                timeComplexity: 'O(N) - We visit each node exactly once.',
                spaceComplexity: 'O(H) - O(h) function calls will be placed on the stack in the worst case, where h is the height of the tree.',
                companies: ['Google', 'Amazon', 'Meta']
            },
            {
                id: 'same-tree',
                title: 'Same Tree',
                difficulty: 'Easy',
                description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
                javaCode: `class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    }
}`,
                timeComplexity: 'O(N) - Where N is a number of nodes in the tree, since one visits each node exactly once.',
                spaceComplexity: 'O(log(N)) in the best case of completely balanced tree and O(N) in the worst case of completely unbalanced tree.',
                companies: ['Amazon', 'Google', 'Microsoft']
            },
            {
                id: 'lowest-common-ancestor-bst',
                title: 'Lowest Common Ancestor of a BST',
                difficulty: 'Medium',
                description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
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
                timeComplexity: 'O(N) - In the worst case we might be visiting all nodes of the BST.',
                spaceComplexity: 'O(N) - Typically O(log(N)) for a balanced BST, but in the worst case (skewed tree) it will be O(N) for the recursion stack.',
                companies: ['LinkedIn', 'Facebook', 'Amazon']
            }
        ]
    },
    'dp': {
        id: 'dp',
        title: 'Dynamic Programming',
        description: 'Optimization problems. Master memoization and tabulation techniques.',
        themeColor: '#8b5cf6',
        problems: [
            {
                id: 'climbing-stairs',
                title: 'Climbing Stairs',
                difficulty: 'Easy',
                description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
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
                timeComplexity: 'O(N) - Single loop up to n.',
                spaceComplexity: 'O(1) - Constant space used for tracking the previous two sequence numbers.',
                companies: ['Apple', 'Amazon', 'Google']
            },
            {
                id: 'coin-change',
                title: 'Coin Change',
                difficulty: 'Medium',
                description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
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
                timeComplexity: 'O(S*n) - Where S is the amount, and n is denomination count. On each step the algorithm finds the next dp value which requires n iterations.',
                spaceComplexity: 'O(S) - We use extra space for the memoization table of size S.',
                companies: ['Amazon', 'Bloomberg', 'Apple']
            },
            {
                id: 'longest-increasing-subsequence',
                title: 'Longest Increasing Subsequence',
                difficulty: 'Medium',
                description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
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
                timeComplexity: 'O(N log N) - Binary search is used per element in the tails array.',
                spaceComplexity: 'O(N) - Array of size N is used.',
                companies: ['Amazon', 'Microsoft', 'Google']
            }
        ]
    },
    'sorting': {
        id: 'sorting',
        title: 'Sorting & Searching',
        description: 'Master Binary Search and classic sorting algorithms.',
        themeColor: '#f59e0b',
        problems: [
            {
                id: 'binary-search',
                title: 'Binary Search',
                difficulty: 'Easy',
                description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.',
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
                timeComplexity: 'O(log N) - Time complexity of standard Binary Search.',
                spaceComplexity: 'O(1) - Constant space used for pointers.',
                companies: ['Microsoft', 'Apple', 'Amazon', 'Meta']
            },
            {
                id: 'search-in-rotated-sorted-array',
                title: 'Search in Rotated Sorted Array',
                difficulty: 'Medium',
                description: 'There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.',
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
                timeComplexity: 'O(log N) - Binary search modified to handle the rotation.',
                spaceComplexity: 'O(1) - Constant space used.',
                companies: ['Amazon', 'Microsoft', 'LinkedIn']
            }
        ]
    },
    'stacks': {
        id: 'stacks',
        title: 'Stacks & Queues',
        description: 'LIFO & FIFO Data structures. Monotonic stacks and priority queues.',
        themeColor: '#f97316',
        problems: [
            {
                id: 'valid-parentheses',
                title: 'Valid Parentheses',
                difficulty: 'Easy',
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
                timeComplexity: 'O(N) - We simply traverse the given string one character at a time and push/pop operations on a stack take O(1) time.',
                spaceComplexity: 'O(N) - Worst case scenario is when all characters are opening brackets, pushing them all onto the stack.',
                companies: ['Amazon', 'Microsoft', 'Google', 'Spotify']
            },
            {
                id: 'daily-temperatures',
                title: 'Daily Temperatures',
                difficulty: 'Medium',
                description: 'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.',
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
                timeComplexity: 'O(N) - Every element is pushed and popped at most once.',
                spaceComplexity: 'O(N) - In the worst case, the stack can grow up to size N (decreasing temperatures).',
                companies: ['Amazon', 'LinkedIn', 'Meta']
            }
        ]
    },
    'recursion': {
        id: 'recursion',
        title: 'Recursion & Backtracking',
        description: 'Solve problems by breaking them into smaller instances.',
        themeColor: '#ec4899',
        problems: [
            {
                id: 'subsets',
                title: 'Subsets',
                difficulty: 'Medium',
                description: 'Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
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
                timeComplexity: 'O(N * 2^N) - Generate all subsets and then copy them into output list.',
                spaceComplexity: 'O(N) - Space used by recursion stack.',
                companies: ['Amazon', 'Apple', 'Meta']
            }
        ]
    },
    'hashing': {
        id: 'hashing',
        title: 'Hashing',
        description: 'Extremely fast lookups and frequency counting.',
        themeColor: '#6366f1',
        problems: [
            {
                id: 'contains-duplicate',
                title: 'Contains Duplicate',
                difficulty: 'Easy',
                description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
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
                timeComplexity: 'O(N) - We do search() and insert() for N elements and each takes O(1) in average.',
                spaceComplexity: 'O(N) - Space used by a hash set to store the N elements.',
                companies: ['Amazon', 'Apple', 'Microsoft']
            }
        ]
    }
};
