/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let val = x ^ y
  let res = 0
  while (val) {
    val = val & (val - 1)
    res++
  }
  return res
};
// @lc code=end