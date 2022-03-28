/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// simple O(n)
var detectCycle = function (head) {
  while (head) {
    if (head.flag) {
      return head
    }
    head.flag = true
    head = head.next
  }
  return null
};

var detectCycle = function (head) {
  let fast = head
  let slow = head
  let hasCycle = false
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      hasCycle = true
      break
    }
  }
  if (!hasCycle) {
    return null
  }
  fast = head
  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};
// @lc code=end