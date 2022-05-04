/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (!nums.length) return 0
  let min = Infinity
  let start = 0,
    sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      min = Math.min(i - start + 1, min)
      sum = sum - nums[start]
      start++
    }
  }
  return min === Infinity ? 0 : min
};
// @lc code=end