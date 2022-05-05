/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true
  const values = []
  while (head) {
    values.push(head.val)
    head = head.next
  }

  let i = 0,
    j = values.length - 1
  while (i <= j) {
    if (values[i] !== values[j]) {
      return false
    }
    i++
    j--
  }
  return true
};

const reverse = node => {
  let pre = null
  while (node) {
    const next = node.next
    node.next = pre
    pre = node
    node = next
  }
  return pre
}

var isPalindrome = function (head) {
  if (!head || !head.next) return true
  if (!head.next.next) return head.next.val === head.val

  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  fast = reverse(slow)

  while (fast && head) {
    if (fast.val !== head.val) {
      return false
    }
    fast = fast.next
    head = head.next
  }
  return true
};


// @lc code=end