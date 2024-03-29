/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum = sum + nums[i]
    } else {
      sum = nums[i]
    }
    res = Math.max(res, sum)
  }
  return res
};
// @lc code=end