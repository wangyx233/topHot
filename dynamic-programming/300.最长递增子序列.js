/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length
  if (!len) {
    return 0
  }
  const dp = (new Array(len)).fill(1)
  let max = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};
// @lc code=end