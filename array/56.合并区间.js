/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  let resLen = res.length
  const len = intervals.length
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] <= res[resLen - 1][1]) {
      res[resLen - 1][1] = Math.max(res[resLen - 1][1], intervals[i][1])
    } else {
      res.push(intervals[i])
      resLen++
    }
  }
  return res
};
// @lc code=end