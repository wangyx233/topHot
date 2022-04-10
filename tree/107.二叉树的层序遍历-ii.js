/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const res = []
  if (!root) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    let level = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }
    res.unshift(level)
  }
  return res
};
// @lc code=end