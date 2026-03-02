import{a as N}from"./chunk-ZGK2WYX5.js";import"./chunk-JAMTQVII.js";import{f as E,m as _,o as L,p as D,r as B,y as k,z as O}from"./chunk-7KSU5RXA.js";import"./chunk-IXCUZI3D.js";import"./chunk-SRAZEWO7.js";import{Cb as y,Db as C,Eb as M,Fb as a,Gb as c,Hb as w,Ka as r,Mb as I,T as u,Va as b,Y as F,Z as x,eb as p,fb as d,hb as v,ia as h,ib as g,jb as U,lb as e,mb as n,nb as s,tb as S,ub as A,vb as m}from"./chunk-RGVQRHF6.js";import"./chunk-MZVDFZPZ.js";import"./chunk-263FURZP.js";import"./chunk-DBOYGR24.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-E2PI57JI.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var T={arrays:{id:"arrays",title:"Arrays & Strings",description:"Fundamental data structures. Master two pointers, sliding window, and prefix sums.",themeColor:"#3b82f6",problems:[{id:"two-sum",title:"Two Sum",difficulty:"Easy",description:`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - We traverse the list containing N elements only once. Each lookup in the table costs only O(1) time.",spaceComplexity:"O(N) - The extra space required depends on the number of items stored in the hash table, which stores at most N elements.",companies:["Amazon","Google","Apple","Microsoft"]},{id:"best-time-buy-sell-stock",title:"Best Time to Buy and Sell Stock",difficulty:"Easy",description:"You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - Single pass through the array.",spaceComplexity:"O(1) - Only two variables are used.",companies:["Amazon","Microsoft","Facebook","Bloomberg"]},{id:"longest-substring",title:"Longest Substring Without Repeating Characters",difficulty:"Medium",description:"Given a string s, find the length of the longest substring without repeating characters.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - We visit each character at most twice (once by right pointer, once by left pointer).",spaceComplexity:"O(min(M, N)) - Where M is the size of the charset (e.g. 26, 128, 256) and N is the string length.",companies:["Amazon","Meta","Google","Apple"]},{id:"valid-anagram",title:"Valid Anagram",difficulty:"Easy",description:`Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - where N is the length of strings s and t.",spaceComplexity:"O(1) - We use an array of size 26, which is constant space.",companies:["Google","Facebook","Amazon"]},{id:"group-anagrams",title:"Group Anagrams",difficulty:"Medium",description:"Given an array of strings strs, group the anagrams together. You can return the answer in any order.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N * K log K) - where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then, we sort each string in O(K log K) time.",spaceComplexity:"O(N * K) - the total information content stored in the answer.",companies:["Amazon","Microsoft","Uber"]},{id:"container-with-most-water",title:"Container With Most Water",difficulty:"Medium",description:"You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - Single pass with two pointers.",spaceComplexity:"O(1) - Constant extra space used.",companies:["Amazon","Google","Meta","Adobe"]}]},"linked-lists":{id:"linked-lists",title:"Linked Lists",description:"Pointer manipulation and sequence operations. Master slow/fast pointers and reversal.",themeColor:"#06b6d4",problems:[{id:"reverse-linked-list",title:"Reverse Linked List",difficulty:"Easy",description:"Given the head of a singly linked list, reverse the list, and return the reversed list.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - Assume that N is the list length, the time complexity is O(N).",spaceComplexity:"O(1) - We only use constant extra space.",companies:["Apple","Amazon","Microsoft","Meta"]},{id:"linked-list-cycle",title:"Linked List Cycle",difficulty:"Easy",description:"Given head, the head of a linked list, determine if the linked list has a cycle in it.",javaCode:`public class Solution {
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
}`,timeComplexity:"O(N) - In the worst case, the fast pointer might traverse the list twice.",spaceComplexity:"O(1) - Floyd's Cycle Finding Algorithm only requires two pointers.",companies:["Microsoft","Amazon","Apple"]},{id:"merge-two-sorted-lists",title:"Merge Two Sorted Lists",difficulty:"Easy",description:`You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.`,javaCode:`class Solution {
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
}`,timeComplexity:"O(N + M) - Because exactly one of l1 and l2 is incremented on each loop iteration.",spaceComplexity:"O(1) - The iterative approach only allocates a few pointers.",companies:["Amazon","Microsoft","Apple","LinkedIn"]},{id:"remove-nth-node",title:"Remove Nth Node From End of List",difficulty:"Medium",description:"Given the head of a linked list, remove the nth node from the end of the list and return its head.",javaCode:`class Solution {
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
}`,timeComplexity:"O(L) - The algorithm makes one traversal of the list of L nodes.",spaceComplexity:"O(1) - We only used constant extra space.",companies:["Facebook","Amazon","Apple"]}]},trees:{id:"trees",title:"Trees & Graphs",description:"Non-linear data structures. Master BFS, DFS, and topological sort.",themeColor:"#10b981",problems:[{id:"maximum-depth",title:"Maximum Depth of Binary Tree",difficulty:"Easy",description:"Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",javaCode:`class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        } else {
            int leftDepth = maxDepth(root.left);
            int rightDepth = maxDepth(root.right);
            return Math.max(leftDepth, rightDepth) + 1;
        }
    }
}`,timeComplexity:"O(N) - We visit each node exactly once.",spaceComplexity:"O(N) - In the worst case (completely unbalanced tree), the recursion stack scales with N.",companies:["Apple","LinkedIn","Amazon"]},{id:"invert-binary-tree",title:"Invert Binary Tree",difficulty:"Easy",description:"Given the root of a binary tree, invert the tree, and return its root.",javaCode:`class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        
        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        
        root.left = right;
        root.right = left;
        
        return root;
    }
}`,timeComplexity:"O(N) - We visit each node exactly once.",spaceComplexity:"O(H) - O(h) function calls will be placed on the stack in the worst case, where h is the height of the tree.",companies:["Google","Amazon","Meta"]},{id:"same-tree",title:"Same Tree",difficulty:"Easy",description:"Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",javaCode:`class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    }
}`,timeComplexity:"O(N) - Where N is a number of nodes in the tree, since one visits each node exactly once.",spaceComplexity:"O(log(N)) in the best case of completely balanced tree and O(N) in the worst case of completely unbalanced tree.",companies:["Amazon","Google","Microsoft"]},{id:"lowest-common-ancestor-bst",title:"Lowest Common Ancestor of a BST",difficulty:"Medium",description:"Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - In the worst case we might be visiting all nodes of the BST.",spaceComplexity:"O(N) - Typically O(log(N)) for a balanced BST, but in the worst case (skewed tree) it will be O(N) for the recursion stack.",companies:["LinkedIn","Facebook","Amazon"]}]},dp:{id:"dp",title:"Dynamic Programming",description:"Optimization problems. Master memoization and tabulation techniques.",themeColor:"#8b5cf6",problems:[{id:"climbing-stairs",title:"Climbing Stairs",difficulty:"Easy",description:"You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - Single loop up to n.",spaceComplexity:"O(1) - Constant space used for tracking the previous two sequence numbers.",companies:["Apple","Amazon","Google"]},{id:"coin-change",title:"Coin Change",difficulty:"Medium",description:`You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.`,javaCode:`class Solution {
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
}`,timeComplexity:"O(S*n) - Where S is the amount, and n is denomination count. On each step the algorithm finds the next dp value which requires n iterations.",spaceComplexity:"O(S) - We use extra space for the memoization table of size S.",companies:["Amazon","Bloomberg","Apple"]},{id:"longest-increasing-subsequence",title:"Longest Increasing Subsequence",difficulty:"Medium",description:"Given an integer array nums, return the length of the longest strictly increasing subsequence.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N log N) - Binary search is used per element in the tails array.",spaceComplexity:"O(N) - Array of size N is used.",companies:["Amazon","Microsoft","Google"]}]},sorting:{id:"sorting",title:"Sorting & Searching",description:"Master Binary Search and classic sorting algorithms.",themeColor:"#f59e0b",problems:[{id:"binary-search",title:"Binary Search",difficulty:"Easy",description:"Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",javaCode:`class Solution {
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
}`,timeComplexity:"O(log N) - Time complexity of standard Binary Search.",spaceComplexity:"O(1) - Constant space used for pointers.",companies:["Microsoft","Apple","Amazon","Meta"]},{id:"search-in-rotated-sorted-array",title:"Search in Rotated Sorted Array",difficulty:"Medium",description:"There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",javaCode:`class Solution {
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
}`,timeComplexity:"O(log N) - Binary search modified to handle the rotation.",spaceComplexity:"O(1) - Constant space used.",companies:["Amazon","Microsoft","LinkedIn"]}]},stacks:{id:"stacks",title:"Stacks & Queues",description:"LIFO & FIFO Data structures. Monotonic stacks and priority queues.",themeColor:"#f97316",problems:[{id:"valid-parentheses",title:"Valid Parentheses",difficulty:"Easy",description:'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - We simply traverse the given string one character at a time and push/pop operations on a stack take O(1) time.",spaceComplexity:"O(N) - Worst case scenario is when all characters are opening brackets, pushing them all onto the stack.",companies:["Amazon","Microsoft","Google","Spotify"]},{id:"daily-temperatures",title:"Daily Temperatures",difficulty:"Medium",description:"Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - Every element is pushed and popped at most once.",spaceComplexity:"O(N) - In the worst case, the stack can grow up to size N (decreasing temperatures).",companies:["Amazon","LinkedIn","Meta"]}]},recursion:{id:"recursion",title:"Recursion & Backtracking",description:"Solve problems by breaking them into smaller instances.",themeColor:"#ec4899",problems:[{id:"subsets",title:"Subsets",difficulty:"Medium",description:"Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N * 2^N) - Generate all subsets and then copy them into output list.",spaceComplexity:"O(N) - Space used by recursion stack.",companies:["Amazon","Apple","Meta"]}]},hashing:{id:"hashing",title:"Hashing",description:"Extremely fast lookups and frequency counting.",themeColor:"#6366f1",problems:[{id:"contains-duplicate",title:"Contains Duplicate",difficulty:"Easy",description:"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",javaCode:`class Solution {
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
}`,timeComplexity:"O(N) - We do search() and insert() for N elements and each takes O(1) in average.",spaceComplexity:"O(N) - Space used by a hash set to store the N elements.",companies:["Amazon","Apple","Microsoft"]}]}};var V=(i,o)=>o.id;function q(i,o){if(i&1&&(e(0,"span",24),s(1,"i",29),a(2),n()),i&2){let t=o.$implicit;r(2),w(" ",t)}}function z(i,o){if(i&1&&s(0,"i",30),i&2){let t=m().$implicit,f=m(2);C("fa-chevron-down",f.expandedId()!==t.id)("fa-chevron-up",f.expandedId()===t.id)}}function H(i,o){i&1&&s(0,"i",27)}function K(i,o){if(i&1&&(e(0,"div",28)(1,"div",31)(2,"h4",32),s(3,"i",33),a(4," Problem Statement"),n(),e(5,"div",34),a(6),n()(),e(7,"div",35)(8,"div",36)(9,"span"),s(10,"i",37),a(11," Code Solution"),n(),e(12,"button",38),s(13,"i",39),a(14," Copy"),n()(),e(15,"pre",40)(16,"code"),a(17),n()()(),e(18,"div",41)(19,"div",42)(20,"div",43),s(21,"i",44),a(22," Time Complexity"),n(),e(23,"div",45),a(24),n()(),e(25,"div",42)(26,"div",43),s(27,"i",46),a(28," Space Complexity"),n(),e(29,"div",45),a(30),n()()()()),i&2){let t=m().$implicit;r(6),c(t.description),r(11),c(t.javaCode),r(7),c(t.timeComplexity),r(6),c(t.spaceComplexity)}}function G(i,o){if(i&1){let t=S();e(0,"div",16)(1,"div",17),A("click",function(){let l=F(t).$implicit,P=m(2);return x(P.toggleExpand(l.id))}),s(2,"div",18),e(3,"div",19)(4,"div",20)(5,"h3",21),a(6),n(),e(7,"span",22),a(8),n()(),e(9,"div",23),g(10,q,3,1,"span",24,v),n()(),e(12,"div",25),p(13,z,1,4,"i",26)(14,H,1,0,"i",27),n()(),p(15,K,31,4,"div",28),n()}if(i&2){let t=o.$implicit,f=m(),l=m();C("expanded",l.expandedId()===t.id),r(2),y("background",f.themeColor),r(4),c(t.title),r(),M(t.difficulty.toLowerCase()),r(),w(" ",t.difficulty," "),r(2),U(t.companies),r(3),d(l.isUnlocked(t.id)||l.expandedId()===t.id?13:14),r(2),d(l.expandedId()===t.id?15:-1)}}function Z(i,o){if(i&1&&(e(0,"div",7),s(1,"div",8),e(2,"div",9)(3,"span",10),s(4,"i",11),a(5," Topic Focus "),n(),e(6,"h1",12),a(7),n(),e(8,"p",13),a(9),n()()(),e(10,"div",14),g(11,G,16,10,"div",15,V),n()),i&2){let t=o;r(3),y("color",t.themeColor)("border-color",t.themeColor),r(4),c(t.title),r(2),c(t.description),r(2),U(t.problems)}}function R(i,o){i&1&&(e(0,"div",7),s(1,"div",8),e(2,"div",9)(3,"h1",12),a(4,"Coming Soon"),n(),e(5,"p",13),a(6,"We're adding new problems!"),n()()(),e(7,"div",47),s(8,"i",48),e(9,"p"),a(10,"Problems for this section will be available soon!"),n()())}var j=class i{route=u(E);adGate=u(N);categoryId=h("");expandedId=h(null);categoryData=I(()=>T[this.categoryId()]||null);constructor(){this.route.paramMap.subscribe(o=>{this.categoryId.set(o.get("id")??""),this.expandedId.set(null)})}isUnlocked(o){return this.adGate.unlockedItems(),this.adGate.isItemUnlocked(`cq::${o}`)}async toggleExpand(o){if(this.expandedId()===o)this.expandedId.set(null);else{let t=`cq::${o}`;if(!this.adGate.isItemUnlocked(t)&&!await this.adGate.unlockItemWithAd(t,"this coding problem"))return;this.expandedId.set(o),this.adGate.onContentCompleted()}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["app-cq-detail"]],decls:10,vars:1,consts:[["translucent","true",1,"ion-no-border"],[1,"tut-toolbar"],["slot","start"],["defaultHref","/coding-questions","text","","color","light"],[1,"brand-title"],[1,"tut-content"],[1,"page-container"],[1,"hero"],[1,"hero-glow"],[1,"hero-content"],[1,"hero-badge"],[1,"fa-solid","fa-layer-group","hero-badge-icon"],[1,"title"],[1,"subtitle"],[1,"list"],[1,"problem-card",3,"expanded"],[1,"problem-card"],[1,"problem-header",3,"click"],[1,"accent-line"],[1,"problem-header-content"],[1,"problem-title-row"],[1,"problem-title"],[1,"difficulty-badge"],[1,"problem-meta"],[1,"company-chip"],[1,"expand-icon"],[1,"fa-solid",3,"fa-chevron-down","fa-chevron-up"],[1,"fa-solid","fa-lock",2,"color","#f59e0b","font-size","11px"],[1,"problem-content"],[1,"fa-solid","fa-building"],[1,"fa-solid"],[1,"desc-section"],[1,"section-title"],[1,"fa-solid","fa-align-left"],[1,"desc-text"],[1,"java-section"],[1,"code-header"],[1,"fa-brands","fa-java","text-orange-400"],[1,"copy-btn"],[1,"fa-regular","fa-copy"],[1,"code-block"],[1,"complexity-section"],[1,"complexity-box"],[1,"comp-label"],[1,"fa-solid","fa-stopwatch"],[1,"comp-val"],[1,"fa-solid","fa-memory"],[1,"empty-state"],[1,"fa-solid","fa-hammer","mb-4","text-3xl"]],template:function(t,f){if(t&1&&(e(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),s(3,"ion-back-button",3),n(),e(4,"ion-title",4),a(5,"JavaIQ"),n()()(),e(6,"ion-content",5)(7,"div",6),p(8,Z,13,6)(9,R,11,0),n()()),t&2){let l;r(8),d((l=f.categoryData())?8:9,l)}},dependencies:[D,B,O,k,L,_],styles:['@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh0NSDulI.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh2dSDulI.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh0dSDulI.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh3tSDulI.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bhZ_Wmh2uX.woff2) format("woff2");unicode-range:U+2000-2001,U+2004-2008,U+200A,U+23B8-23BD,U+2500-259F}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh09SDulI.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Fira Code;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh0NSDulI.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh2dSDulI.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh0dSDulI.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh3tSDulI.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bhZ_Wmh2uX.woff2) format("woff2");unicode-range:U+2000-2001,U+2004-2008,U+200A,U+23B8-23BD,U+2500-259F}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh09SDulI.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Fira Code;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/firacode/v27/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7SUc.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7SUc.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7SUc.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7SUc.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7SUc.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.tut-toolbar[_ngcontent-%COMP%]{--background: #0b1120;--color: white;--border-style: none}.brand-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-weight:800;letter-spacing:-.02em;color:#fff}.tut-content[_ngcontent-%COMP%]{--background: #0b1120}.page-container[_ngcontent-%COMP%]{padding:0 16px 40px;max-width:600px;margin:0 auto}.hero[_ngcontent-%COMP%]{position:relative;background:linear-gradient(145deg,#0b1120,#161b22);padding:32px 20px 48px;color:#fff;overflow:hidden;text-align:center;display:flex;flex-direction:column;align-items:center;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:24px}.hero-glow[_ngcontent-%COMP%]{position:absolute;top:-60px;left:50%;transform:translate(-50%);width:200px;height:200px;background:radial-gradient(circle,rgba(59,130,246,.15) 0%,transparent 70%);filter:blur(50px);pointer-events:none}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:600px}.hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;font-family:Inter,sans-serif;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;background:#ffffff08;border:1px solid;border-radius:20px;padding:5px 14px;margin-bottom:16px}.title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;margin:0 0 12px;font-size:1.85rem;font-weight:900;letter-spacing:-.03em;line-height:1.15;color:#e2e8f0}.subtitle[_ngcontent-%COMP%]{font-family:Inter,sans-serif;margin:0;font-size:.85rem;color:#94a3b8;line-height:1.5}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:40px 20px;color:#64748b;font-family:Inter,sans-serif;font-size:.9rem}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.problem-card[_ngcontent-%COMP%]{position:relative;display:block;background:#ffffff08;border:1px solid rgba(255,255,255,.06);border-radius:14px;overflow:hidden;transition:all .3s ease}.problem-card.expanded[_ngcontent-%COMP%]{background:#ffffff0d;border-color:#ffffff1a;box-shadow:0 10px 30px #0003}.problem-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:18px 16px;cursor:pointer;-webkit-user-select:none;user-select:none}.accent-line[_ngcontent-%COMP%]{position:absolute;left:0;top:12px;bottom:12px;width:3px;border-radius:0 3px 3px 0;opacity:.7}.problem-header-content[_ngcontent-%COMP%]{flex:1;min-width:0;padding-left:12px}.problem-title-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px}.problem-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:1rem;font-weight:700;color:#e2e8f0;margin:0;letter-spacing:-.01em;line-height:1.3}.difficulty-badge[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.65rem;font-weight:700;padding:3px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:.05em}.difficulty-badge.easy[_ngcontent-%COMP%]{color:#10b981;background:#10b9811a}.difficulty-badge.medium[_ngcontent-%COMP%]{color:#f59e0b;background:#f59e0b1a}.difficulty-badge.hard[_ngcontent-%COMP%]{color:#ef4444;background:#ef44441a}.problem-meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.company-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;font-family:Inter,sans-serif;font-size:.6rem;font-weight:600;color:#94a3b8;background:#ffffff0d;border-radius:4px;padding:2px 6px}.company-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.55rem;opacity:.7}.expand-icon[_ngcontent-%COMP%]{color:#64748b;font-size:.9rem;padding-left:12px;transition:transform .3s}.problem-content[_ngcontent-%COMP%]{padding:0 16px 20px 24px;border-top:1px solid rgba(255,255,255,.04);animation:_ngcontent-%COMP%_fadeIn .3s ease-out forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.desc-section[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:24px}.section-title[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.75rem;font-weight:700;color:#cbd5e1;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px;display:flex;align-items:center;gap:6px}.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#8b5cf6}.desc-text[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.85rem;color:#94a3b8;line-height:1.6;white-space:pre-wrap}.java-section[_ngcontent-%COMP%]{background:#0d1117;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;margin-bottom:20px}.code-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:#ffffff08;padding:8px 16px;border-bottom:1px solid rgba(255,255,255,.05);font-family:Inter,sans-serif;font-size:.75rem;font-weight:600;color:#cbd5e1}.copy-btn[_ngcontent-%COMP%]{background:transparent;border:none;color:#94a3b8;font-size:.7rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px}.copy-btn[_ngcontent-%COMP%]:hover{color:#fff}.code-block[_ngcontent-%COMP%]{margin:0;padding:16px;overflow-x:auto}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Fira Code,monospace;font-size:.8rem;color:#e2e8f0;line-height:1.5}.complexity-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;background:#8b5cf60d;border:1px solid rgba(139,92,246,.1);border-radius:12px;padding:16px}.complexity-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.comp-label[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.7rem;font-weight:700;color:#c4b5fd;text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:6px}.comp-val[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:.8rem;color:#cbd5e1;line-height:1.5}'],changeDetection:0})};export{j as CqDetailComponent};
