/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = nums1.filter(elem => nums2.includes(elem))
  return [...new Set(res)]
};

var intersection = function (nums1, nums2) {
  let temp = new Set(nums1)
  let res = new Set()
  for (const item of nums2) {
    if (temp.has(item)) {
      res.add(item)
    }
  }
  return [...res]
};
// @lc code=end