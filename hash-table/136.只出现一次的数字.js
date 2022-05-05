/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((res, x) => res ^ x)
};

var singleNumber = function (nums) {
  let map = new Map()
  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num)
    } else {
      map.set(num, true)
    }
  }
  return Array.from(map.keys())[0]
};
// @lc code=end