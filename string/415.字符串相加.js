/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0,
    res = []

  while (i >= 0 || j >= 0) {
    let val1 = i >= 0 ? +num1[i] : 0
    let val2 = j >= 0 ? +num2[j] : 0
    let temp = val1 + val2 + carry
    carry = Math.floor(temp / 10)
    res.unshift(temp % 10)
    i--
    j--
  }
  if (carry) res.unshift(carry)

  return res.join('')
};
// @lc code=end