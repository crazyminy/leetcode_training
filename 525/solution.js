/* 
525. 连续数组
给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。

 

示例 1:

输入: [0,1]
输出: 2
说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
示例 2:

输入: [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
 

注意: 给定的二进制数组的长度不会超过50000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contiguous-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let cnt = 0;
    let map = new Map();
    let maxLen = 0;
    map.set(0,-1);
    nums.forEach((num,index)=>{
        if(num === 1){
            cnt++;
        }else{
            cnt--;
        }
        if(map.has(cnt)){
            maxLen = Math.max(index-map.get(cnt),maxLen);
        }else{
            map.set(cnt,index);
        }
        //console.log(maxLen,map)
    })
    return maxLen;
};