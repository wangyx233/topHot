/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const format = n => n.length > 3 ? `${format(n.slice(0, -3))}.${n.slice(-3)}` : `${n}`
  return format(n.toString())
};

var thousandSeparator = function (n) {
  const str = n.toString()
  let len = str.length - 1
  let res = ''
  let count = 0
  for (let i = len; i >= 0; i--) {
    res = str[i] + res
    count++
    if (count % 3 === 0 && i) {
      res = '.' + res
    }
  }
  return res
};

var thousandSeparator = function (n) {
  return n.toString().replace(/(?!^)(?=(\d{3})+$)/g, '.')
};
// @lc code=end