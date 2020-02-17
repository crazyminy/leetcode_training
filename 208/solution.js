/**
 * 208. 实现 Trie (前缀树)

实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

示例:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // 返回 true
trie.search("app");     // 返回 false
trie.startsWith("app"); // 返回 true
trie.insert("app");   
trie.search("app");     // 返回 true
说明:

你可以假设所有的输入都是由小写字母 a-z 构成的。
保证所有输入均为非空字符串。
 */

 /**
 * Initialize your data structure here.
 */
var Trie = function() {
    
    this.root = {};
};


/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let arr = word.split("");
    let treeNode = this.root;
    for(let i = 0;i<arr.length;i++){
        let ch = arr[i];
        if(treeNode.hasOwnProperty(ch)){
            treeNode = treeNode[ch];
        }else{
            let nodeNew = {};
            treeNode[ch] = nodeNew;
            treeNode = nodeNew;
        }
    }
    treeNode.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let arr = word.split("");
    let treeNode = this.root;
    for(let i = 0;i<arr.length;i++){
        let ch = arr[i];
        if(treeNode.hasOwnProperty(ch)){
            treeNode = treeNode[ch];
        }else{
            return false;
        }
    }
    return Boolean(treeNode.end);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let arr = prefix.split("");
    let treeNode = this.root;
    for(let i = 0;i<arr.length;i++){
        let ch = arr[i];
        if(treeNode.hasOwnProperty(ch)){
            treeNode = treeNode[ch];
        }else{
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */