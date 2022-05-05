/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    res = Math.max(res, prices[i] - min)
  }
  return res
};
// @lc code=end