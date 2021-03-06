/*
713. 乘积小于K的子数组
给定一个正整数数组 nums。

找出该数组内乘积小于 k 的连续的子数组的个数。

示例 1:

输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
说明:

0 < nums.length <= 50000
0 < nums[i] < 1000
0 <= k < 10^6
在真实的面试中遇到过这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-product-less-than-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  //暴力法   超时
  /* let len = nums.length;
  let i =0;j=0;
  let res = 0;
  for(;i<len;i++){
      let mul = 1;
      for(j=i;j<len;j++){
          mul*=nums[j];
          if(mul<k){
              res++;
          }else{
              break;
          }
      }
  }  
  return res; */
  let res = 0;
  let len = nums.length;
  let left=0,right=0;
  let mul = nums[0];
  while(right<len){
    if(mul>=k){
        if(left===right){
            right++;
            mul = mul*nums[right];
        }else{
            mul = mul/nums[left];
            left++;
        }
    }else{
        res+=(right-left+1);
        right++;
        mul*=nums[right];
    }
  }
  return res;
};

console.log(numSubarrayProductLessThanK([10,5,2,6],100));