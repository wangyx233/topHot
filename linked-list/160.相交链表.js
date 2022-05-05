/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let map = new Map()
  let a = headA
  let b = headB
  while (a) {
    map.set(a, true)
    a = a.next
  }
  while (b) {
    if (map.has(b)) {
      return b
    } else {
      b = b.next
    }
  }
  return null
};

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let a = headA
  let b = headB
  while (a != b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }
  return a
};
// @lc code=end