/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 用大饼干喂大孩子
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  let index = s.length - 1
  for (let i = g.length - 1; i >= 0; i--) {
    if (s[index] >= g[i]) {
      index--
      count++
    }
  }
  return count
};
// @lc code=end