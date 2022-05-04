/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 一层遍历amount，一层遍历coin
var coinChange = function (coins, amount) {
  const dp = []
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    dp[i] = Infinity
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end