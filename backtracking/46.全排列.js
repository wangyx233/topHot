/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const len = nums.length
  const set = []
  const visited = {}

  function dfs(index) {
    if (index === len) {
      return res.push(set.slice())
    }
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = true
        set.push(nums[i])
        dfs(index + 1)
        set.pop()
        visited[nums[i]] = false
      }
    }
  }
  dfs(0)
  // 返回结果数组
  return res
};
// @lc code=end