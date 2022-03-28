/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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

// 借助数组空间改变链表的值，时间O(n)，空间O(n)
// 改进，双指针，时间O(n)，空间O(1)，迭代的方式，返回新的head
var reverseList = function (head) {
    let pre = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
};

// 注意解构赋值的顺序
var reverseList = function (head) {
    let [pre, current] = [null, head];
    while (current) {
        [current.next, pre, current] = [pre, current, current.next];
    }
    return pre;
};

// 递归的方式，拆分成小问题，空间O(n)，时间O(n)
var reverseList = function (head) {
    // 递归终止条件
    if (!head || !head.next) return head;
    // 递归表达式
    let cur = reverseList(head.next);
    // 逻辑处理
    head.next.next = head;
    head.next = null;
    return cur;
};

// 变化的双指针，注意边界情况
var reverseList = function (head) {
    if (!head) return head;
    let cur = head;
    while (head.next) {
        [head.next.next, cur, head.next] = [cur, head.next, head.next.next];
    }
    return cur;
};

// @lc code=end

