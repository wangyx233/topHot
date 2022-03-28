/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// O(n)
var hasCycle = function (head) {
  while (head) {
    if (head.flag) {
      return true
    }
    head.flag = true
    head = head.next
  }
  return false
};
// two fast

var hasCycle = function (head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head
  let fast = head.next
  while (slow != fast) {
    if (!fast.next || !fast.next.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
};


var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return true
    }
  }
  return false
};
// @lc code=end