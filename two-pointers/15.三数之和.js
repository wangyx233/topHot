/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  // sort
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < len - 2; i++) {
    let m = i + 1,
      n = len - 1

    // same nums contine
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    while (m < n) {
      let sum = nums[m] + nums[n] + nums[i]
      if (sum > 0) {
        n--

        while (m < n && nums[n] === nums[n + 1]) {
          n--
        }

      } else if (sum < 0) {
        m++

        while (m < n && nums[m] === nums[m - 1]) {
          m++
        }

      } else {
        res.push([nums[m], nums[n], nums[i]])
        m++
        n--

        while (m < n && nums[n] === nums[n + 1]) {
          n--
        }

        while (m < n && nums[m] === nums[m - 1]) {
          m++
        }
      }
    }
  }
  return res
};
// @lc code=end