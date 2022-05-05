/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2
  }
  if (!root2) {
    return root1
  }

  const queue = [root1, root2]

  while (queue.length) {
    const r1 = queue.shift()
    const r2 = queue.shift()
    r1.val = r1.val + r2.val
    if (r1.left && r2.left) {
      queue.push(r1.left)
      queue.push(r2.left)
    } else if (!r1.left) {
      r1.left = r2.left
    }

    if (r1.right && r2.right) {
      queue.push(r1.right)
      queue.push(r2.right)
    } else if (!r1.right) {
      r1.right = r2.right
    }
  }
  return root1
};

var mergeTrees = function (root1, root2) {
  if (!root1) {
    return root2
  }
  if (!root2) {
    return root1
  }
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
};
// @lc code=end