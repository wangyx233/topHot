/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function dfs(root, minValue, maxValue) {
    if (!root) return true
    if (root.val <= minValue || root.val >= maxValue) return false
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
  }
  return dfs(root, -Infinity, Infinity)
};
// @lc code=end