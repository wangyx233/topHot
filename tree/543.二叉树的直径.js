/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0

  const dfs = root => {
    if (!root) {
      return 0
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    max = Math.max(max, left + right)

    return Math.max(left, right) + 1
  }
  dfs(root)
  return max
};
// @lc code=end