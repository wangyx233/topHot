/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// bfs
var serialize = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    const cur = queue.shift()
    if (cur) {
      res.push(cur.val)
      queue.push(cur.left)
      queue.push(cur.right)
    } else {
      res.push(null)
    }
  }
  return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null
  const nodes = data
  const root = new TreeNode(nodes[0])
  const queue = [root]
  let i = 1
  while (i < nodes.length) {
    let cur = queue.shift()
    let leftval = nodes[i]
    let rightval = nodes[i + 1]
    if (leftval !== null) {
      let left = new TreeNode(leftval)
      cur.left = left
      queue.push(left)
    }
    if (rightval !== null) {
      let right = new TreeNode(rightval)
      cur.right = right
      queue.push(right)
    }
    i += 2
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end