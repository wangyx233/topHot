/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length / 2
  const map = new Map()
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }
  for (const [key, value] of map.entries()) {
    if (value > len) {
      return key
    }
  }
};

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

var majorityElement = function (nums) {
  let res,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      res = nums[i]
      count++
    } else {
      if (res === nums[i]) {
        count++
      } else {
        count--
      }
    }
  }
  return res
};
// @lc code=end