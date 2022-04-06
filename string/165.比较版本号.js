/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const max = Math.max(v1.length, v2.length)
  for (let i = 0; i < max; i++) {
    let x = 0,
      y = 0
    if (i < v1.length) x = +v1[i]
    if (i < v2.length) y = +v2[i]
    if (x > y) return 1
    if (x < y) return -1
  }
  return 0
};
// @lc code=end