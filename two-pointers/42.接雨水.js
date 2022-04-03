/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 思路：看每个位置的接水量，接水量和左右的最高高度相关，并且Math.min(maxLeft, maxRight)
var trap = function (height) {
  const n = height.length
  let res = 0
  for (let i = 1; i < n - 1; i++) {
    let maxl = 0
    let maxr = 0

    // 找左边最高
    for (let j = i; j >= 0; j--) {
      maxl = Math.max(maxl, height[j])
    }

    // 找右边最高
    for (let j = i; j < n; j++) {
      maxr = Math.max(maxr, height[j])
    }

    res += Math.min(maxl, maxr) - height[i]
  }
  return res
};

// 暴力解法超时，优化双指针
var trap = function (height) {
  let leftCur = 0
  let rightCur = height.length - 1
  let res = 0
  let leftMax = 0
  let rightMax = 0
  while (leftCur < rightCur) {
    const left = height[leftCur]
    const right = height[rightCur]
    if (left < right) {
      leftMax = Math.max(left, leftMax)
      res += leftMax - left
      leftCur++
    } else {
      rightMax = Math.max(right, rightMax)
      res += rightMax - right
      rightCur--
    }
  }
  return res
};


// @lc code=end