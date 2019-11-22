/**
 * 
 * 5232. 替换子串得到平衡字符串
 * 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。

假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。

 

给你一个这样的字符串 s，请通过「替换子串」的方式，使原字符串 s 变成一个「平衡字符串」。

你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。

请返回待替换子串的最小可能长度。

如果原字符串自身就是一个平衡字符串，则返回 0。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    let len = s.length;
    let curNum = {Q:0,W:0,E:0,R:0,}
    for(let i = 0 ;i<length;i++){
        let ch = s.charAt(i);
        switch(ch){
            case 'Q':
                curNum.Q++
                break;
            case 'W':
                curNum.W++
                break;
            case "E":
                curNum.E++
                break;
            case "R":
                curNum.R++;
                break;
        }
    }
};