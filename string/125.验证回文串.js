/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // get number, string [a-zA-Z0-9] ,to lowercase, reverse
  // let str = ''
  // for (let i = 0; i < s.length; i++) {
  //   if (/[a-zA-Z0-9]/.test(s[i])) {
  //     str += s[i].toLowerCase()
  //   }
  // }
  const str = s.toLowerCase().replace(/[\W_]/ig, '')
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true

};
// @lc code=end