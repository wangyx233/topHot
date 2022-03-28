/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 简单的想法，先把区间放进去，然后合并区间
var insert = function (intervals, newInterval) {
  const all = intervals.concat([newInterval])
  all.sort((a, b) => a[0] - b[0])
  let res = [all[0]]
  let reslen = res.length
  for (let i = 1; i < all.length; i++) {
    if (all[i][0] <= res[reslen - 1][1]) {
      res[reslen - 1][1] = Math.max(res[reslen - 1][1], all[i][1])
    } else {
      res.push(all[i])
      reslen++
    }
  }
  return res
};

var insert = function (intervals, newInterval) {
  let resindex = 0
  let i = 0
  let res = []
  const len = intervals.length
  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    resindex++
    i++
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0])
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    i++
  }
  res[resindex] = newInterval
  resindex++
  while (i < len) {
    res[resindex] = intervals[i]
    resindex++
    i++
  }

  return res
};
// @lc code=end