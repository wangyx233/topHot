/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const reg = /\s*([-\+]?[0-9]*).*/
  const groups = s.match(reg)
  let res = 0
  if (groups) {
    res = +groups[1]
    if (isNaN(res)) {
      return 0
    }
  }
  const max = 2 ** 31 - 1
  const min = -max - 1
  if (res > max) {
    return max
  }
  if (res < min) {
    return min
  }
  return res
};
// @lc code=end