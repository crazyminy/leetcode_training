/* 给你一个字符串 S，返回只含 单一字母 的子串个数。
5067. 统计只含单一字母的子串
示例 1：

输入： "aaaba"
输出： 8
解释： 
只含单一字母的子串分别是 "aaa"， "aa"， "a"， "b"。
"aaa" 出现 1 次。
"aa" 出现 2 次。
"a" 出现 4 次。
"b" 出现 1 次。
所以答案是 1 + 2 + 4 + 1 = 8。
示例 2:

输入： "aaaaaaaaaa"
输出： 55
 

提示：

1 <= S.length <= 1000
S[i] 仅由小写英文字母组成。 */

/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
  let sum = 0;
  let curCh = "";
  let curLen = 0;
  for(let i = 0 ;i<S.length;i++){
    if(S.charAt(i) == curCh){
        curLen++;
    }else{
        sum+=add(curLen);
        curCh = S.charAt(i);
        curLen = 1;
    }
  }  
  sum+=add(curLen);

  return sum;
};

function add(num){
    if(num === 0){
        return 0;
    }
    return (num+1)*num/2;
}

console.log(countLetters("aaaaaaaaaa"));