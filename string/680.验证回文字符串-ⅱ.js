/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let len = s.length
  let i = 0,
    j = len - 1
  while (i < j && s[i] === s[j]) {
    i++
    j--
  }

  if (isPalindrome(i + 1, j)) {
    return true
  }

  if (isPalindrome(i, j - 1)) {
    return true
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }

    return true
  }

  return false
};
// @lc code=end