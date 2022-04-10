/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n === 0 || n === 1) return n
  return fib(n - 1) + fib(n - 2)
};

var fib = function (n) {
  const fn = []
  fn[0] = 0
  fn[1] = 1
  for (let i = 2; i <= n; i++) {
    fn[i] = fn[i - 1] + fn[i - 2]
  }
  return fn[n]
};

var fib = function (n) {
  if (n < 2) {
    return n
  }
  let p = 0,
    q = 0,
    res = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = res
    res = p + q
  }
  return res
};
// @lc code=end