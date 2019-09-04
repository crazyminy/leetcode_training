/* Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let length = s.length;
    if(length===0){
        return 0;
    }
    arr.push(s.charAt(0));
    let max = 1;
    let st,ed;
    st = 0;
    ed = 0;
    while(st+max-1<= length -1){
        while(ed<length-1){  
            ed++;
            if(arr.indexOf(s.charAt(ed))!==-1){
                break;
            }else{
                arr.push(s.charAt(ed));
                max = arr.length>max?arr.length:max;
            }
        }
        /* st++;
        set = set.delete(s.charAt(st)); */
        let target = s.charAt(ed);
        let index = arr.indexOf(target);
        arr.splice(0,index+1);
        arr.push(target);
        st = st + index +1;
    }

    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));