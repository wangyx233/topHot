/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, true)
  }
  let res = []
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      res.push(i)
    }
  }
  return res
};

var findDisappearedNumbers = function (nums) {
  let res = []
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      res.push(i)
    }
  }
  return res
};

var findDisappearedNumbers = function (nums) {
  const len = nums.length
  for (const num of nums) {
    const index = (num - 1) % len
    nums[index] = nums[index] + len
  }
  let res = []
  for (let i = 1; i <= len; i++) {
    if (nums[i] < len) {
      res.push(i + 1)
    }
  }
  return res
};
// @lc code=end