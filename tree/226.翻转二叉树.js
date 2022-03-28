/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root
  }
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
};

var invertTree = function (root) {
  if (!root) {
    return root
  }
  const queue = []
  queue.push(root)
  while (queue.length) {
    const cur = queue.shift();
    [cur.left, cur.right] = [cur.right, cur.left]
    if (cur.left) {
      queue.push(cur.left)
    }
    if (cur.right) {
      queue.push(cur.right)
    }
  }
  return root
};
// @lc code=end