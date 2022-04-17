/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!nums[i]) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
};

var moveZeroes = function (nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[index] = nums[i]
      index++
    }
  }
  while (index < nums.length) {
    nums[index] = 0
    index++
  }
};
// @lc code=end