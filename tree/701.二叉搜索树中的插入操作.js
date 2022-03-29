/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val)
    return root
  }
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  } else {
    root.right = insertIntoBST(root.right, val)
  }

  return root
};

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val)
  let cur = root
  while (cur) {
    if (val < cur.val) {
      if (cur.left) {
        cur = cur.left
      } else {
        cur.left = new TreeNode(val)
        break
      }
    } else {
      if (cur.right) {
        cur = cur.right
      } else {
        cur.right = new TreeNode(val)
        break
      }
    }
  }
  return root
}
// @lc code=end