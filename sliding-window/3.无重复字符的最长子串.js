/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0, n = s.length
  let map = new Map()
  let start = 0
  for (let end = 0; end < n; end++) {
    const current = s[end]
    if (map.has(current)) {
      start = Math.max(start, map.get(current))
    }
    res = Math.max(res, end - start + 1)
    map.set(current, end + 1)
  }
  return res
};
// @lc code=end

