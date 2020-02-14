/**
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(comparab);
    //console.log(nums);
    return nums.join("");
    
};

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function comparab(a,b){
    let stra = a.toString();
    let strb = b.toString();
    let num1 = parseInt(stra+strb);
    let num2 = parseInt(strb+stra);
    // console.log(num1,num2);
    // console.log(num1-num2);
    return num2-num1;
}

largestNumber([3,30,34,5,9]);