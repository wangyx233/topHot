/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// n = (n - 1) + (n - 2)
var f = []
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  if (f[n] == undefined) {
    f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return f[n]
};


var climbStairs = function (n) {
  const f = []
  f[1] = 1
  f[2] = 2
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
};
// @lc code=end