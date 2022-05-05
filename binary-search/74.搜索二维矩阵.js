/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 确定行
  let low = 0,
    high = matrix.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let value = matrix[mid][0]
    if (value === target) {
      return true
    } else if (value > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  if (high < 0) return false
  // 确定位置
  let row = matrix[high]
  if (!row.length) {
    return false
  }
  low = 0, high = row.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let value = row[mid]
    if (value === target) {
      return true
    } else if (value > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return false
};
// @lc code=end