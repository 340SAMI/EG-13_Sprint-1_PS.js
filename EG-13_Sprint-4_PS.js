function ListNode(val, next) { this.val = val ?? 0; this.next = next ?? null; }
function toList(arr) { return arr.reduceRight((next, val) => new ListNode(val, next), null); }
function toArray(head) { const a = []; while (head) { a.push(head.val); head = head.next; } return a; }

var isIsomorphic = function(s, t) {
    const mapS = {}, mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] !== mapT[t[i]]) return false;
        mapS[s[i]] = mapT[t[i]] = i + 1;
    }
    return true;
};

console.log("01. Isomorphic Strings:", isIsomorphic("egg", "add"));

var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    const mapA = {}, mapB = {};
    for (let i = 0; i < pattern.length; i++) {
        if (mapA[pattern[i]] !== mapB[words[i]]) return false;
        mapA[pattern[i]] = mapB[words[i]] = i + 1;
    }
    return true;
};

console.log("02. Word Pattern:", wordPattern("abba", "dog cat cat dog"));

var findTheDifference = function(s, t) {
    const xor = [...s, ...t].reduce((acc, c) => acc ^ c.charCodeAt(0), 0);
    return String.fromCharCode(xor);
};

console.log("03. Find the Difference:", findTheDifference("abcd", "abcde"));

var reverseList = function(head) {
    let prev = null;
    while (head) { [head.next, prev, head] = [prev, head, head.next]; }
    return prev;
};

console.log("04. Reverse Linked List:", toArray(reverseList(toList([1, 2, 3, 4, 5]))));

var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
    return slow;
};

console.log("05. Middle of the Linked List:", toArray(middleNode(toList([1, 2, 3, 4, 5]))));

var productExceptSelf = function(nums) {
    const res = Array(nums.length).fill(1);
    let left = 1, right = 1;
    for (let i = 0; i < nums.length; i++) { res[i] *= left; left *= nums[i]; }
    for (let i = nums.length - 1; i >= 0; i--) { res[i] *= right; right *= nums[i]; }
    return res;
};

console.log("06. Product of Array Except Self:", productExceptSelf([1, 2, 3, 4]));

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head), fast = dummy, slow = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast) { fast = fast.next; slow = slow.next; }
    slow.next = slow.next.next;
    return dummy.next;
};

console.log("07. Remove Nth Node From End:", toArray(removeNthFromEnd(toList([1, 2, 3, 4, 5]), 2)));

var searchRange = function(nums, target) {
    const find = (isFirst) => {
        let lo = 0, hi = nums.length - 1, idx = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (nums[mid] === target) { idx = mid; isFirst ? hi = mid - 1 : lo = mid + 1; }
            else if (nums[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return idx;
    };
    return [find(true), find(false)];
};

console.log("08. Find First and Last Position:", searchRange([5, 7, 7, 8, 8, 10], 8));

var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const count = Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (let i = 0; i < s1.length; i++) { count[s1.charCodeAt(i) - a]++; count[s2.charCodeAt(i) - a]--; }
    if (count.every(c => c === 0)) return true;
    for (let i = s1.length; i < s2.length; i++) {
        count[s2.charCodeAt(i) - a]--;
        count[s2.charCodeAt(i - s1.length) - a]++;
        if (count.every(c => c === 0)) return true;
    }
    return false;
};

console.log("09. Permutation in String:", checkInclusion("ab", "eidbaooo"));

var findAnagrams = function(s, p) {
    const res = [], count = Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (let i = 0; i < p.length; i++) { count[p.charCodeAt(i) - a]++; count[s.charCodeAt(i) - a]--; }
    if (count.every(c => c === 0)) res.push(0);
    for (let i = p.length; i < s.length; i++) {
        count[s.charCodeAt(i) - a]--;
        count[s.charCodeAt(i - p.length) - a]++;
        if (count.every(c => c === 0)) res.push(i - p.length + 1);
    }
    return res;
};

console.log("10. Find All Anagrams in a String:", findAnagrams("cbaebabacd", "abc"));
