/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
在真实的面试中遇到过这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


var str = "a";

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    let resStr = "";
    let resLen = 0;

    for(let center = 0;center<2*len-1;center++){
        let curLen;
        let left,right;
        let start,end;
        if(center%2 === 0){
            curLen = 1;
            left = center-2;
            right = center+2;
            start = center/2;
            end = center/2;
        }else{
            curLen = 0;
            left = center-1;
            right = center+1;
        }
        while(left>=0&&right<=2*len-1){
            let leftIndex = left/2;
            let rightIndex = right/2;
            if(s.charCodeAt(leftIndex)===s.charCodeAt(rightIndex)){
                curLen+=2;
                start = leftIndex;
                end = rightIndex;
            }else{
                break;
            }
            left-=2;
            right+=2;
        }
        if(curLen>resLen){
            resLen = curLen;
            resStr = s.slice(start,end+1);
        }
    }

    console.log(resStr);
    return resStr;
};

longestPalindrome(str);