/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode()
  let current = head
  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2
      list2 = list2.next
    } else {
      current.next = list1
      list1 = list1.next
    }
    current = current.next
  }
  if (list1) {
    current.next = list1
  }
  if (list2) {
    current.next = list2
  }
  return head.next
};
// @lc code=end