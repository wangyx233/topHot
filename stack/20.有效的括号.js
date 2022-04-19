/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let res = []
  for (const item of s) {
    if (map[res[res.length - 1]] && map[res[res.length - 1]] === item) {
      res.pop()
    } else {
      res.push(item)
    }
  }
  return !res.length
};
// @lc code=end