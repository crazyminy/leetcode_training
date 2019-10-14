/* 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

 

示例 1：



输入：text = "nlaebolko"
输出：1
示例 2：



输入：text = "loonbalxballpoon"
输出：2
示例 3：

输入：text = "leetcode"
输出：0 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let length = text.length;
    let left = {b:0,a:0,l:0,o:0,n:0};

    let arr = text.split("");

    for(let i = 0;i<length;i++){
        let ch = arr[i];
        if (ch in left){
            left[ch] ++;
        }
    }
    //console.log(left);

    let single1 = Math.min(left.b,left.a);
    single1 = Math.min(single1,left.n);

    let single2 = Math.min(left.l,left.o);
    single2 = parseInt(single2/2);

    return Math.min(single1,single2)
};

console.log(maxNumberOfBalloons("nlaebolko"));