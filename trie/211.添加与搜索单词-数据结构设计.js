/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function () {
  this.word = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const len = word.length
  if (this.word[len]) {
    this.word[len].push(word)
  } else {
    this.word[len] = [word]
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const len = word.length
  if (!this.word[len]) {
    return false
  }

  if (!word.includes('.')) {
    return this.word[len].includes(word)
  }

  const reg = new RegExp(word)
  return this.word[len].some(elem => reg.test(elem))

};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end