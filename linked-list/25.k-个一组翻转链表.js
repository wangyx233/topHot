/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  let end = dummy
  while (end.next) {
    for (let i = 0; i < k && end; i++) {
      end = end.next
    }
    if (!end) {
      break
    }
    const start = pre.next
    const next = end.next
    end.next = null
    pre.next = reverse(start)
    start.next = next
    pre = start
    end = pre
  }
  return dummy.next
};

function reverse(head) {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// @lc code=end