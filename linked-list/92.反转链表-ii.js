/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  let i = 1
  while (i < left) {
    pre = pre.next
    i++
  }
  const cur = pre.next
  while (i < right) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
    i++
  }
  return dummy_node.next
};
// @lc code=end