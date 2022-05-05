/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  if (!root.left && !root.right) {
    return true
  }
  if (!root.left || !root.right) {
    return false
  }
  const queue = [root.left, root.right]
  while (queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) {
      continue
    }
    if (!left || !right) {
      return false
    }

    if (left.val !== right.val) {
      return false
    }
    queue.push(left.left)
    queue.push(right.right)

    queue.push(left.right)
    queue.push(right.left)
  }
  return true
};

var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return dfs(root.left, root.right)
};

function dfs(left, right) {
  if (!left && !right) {
    return true
  }
  if (!left || !right) {
    return false
  }
  if (left.val !== right.val) {
    return false
  }

  return dfs(left.left, right.right) && dfs(left.right, right.left)
}
// @lc code=end