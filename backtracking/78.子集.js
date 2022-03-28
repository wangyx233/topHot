/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const len = nums.length
  const subset = []

  function dfs(index) {
    res.push(subset.slice())
    for (let i = index; i < nums.length; i++) {
      subset.push(nums[i])
      dfs(i + 1)
      subset.pop()
    }
  }
  dfs(0)
  return res
};
// @lc code=end