/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = `${x}`
  let left = 0,
    right = x.length - 1
  while (left <= right) {
    if (x[left] !== x[right]) {
      return false
    }
    left++
    right--
  }
  return true
};

// 数字反转，通过余数
var isPalindrome = function (x) {
  if (x < 0) return false
  let cur = 0
  let num = x
  while (num) {
    cur = cur * 10 + num % 10
    num = Math.floor(num / 10)
  }
  return cur === x
};
// @lc code=end