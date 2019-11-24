/*

1248. 统计「优美子数组」

给你一个整数数组 nums 和一个整数 k。

如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中「优美子数组」的数目。

 

示例 1：

输入：nums = [1,1,2,1,1], k = 3
输出：2
解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
示例 2：

输入：nums = [2,4,6], k = 1
输出：0
解释：数列中不包含任何奇数，所以不存在优美子数组。
示例 3：

输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
输出：16
 

提示：

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let len = nums.length;
  let impossible = false;
  let res = 0;
  let oddArr = [];
  let evenCount = 0;
  for(let i = 0;i<len;i++){
      let curNum = nums[i];
      if(curNum%2 === 0){
          //偶数
          if((oddArr.length+len-1-i)<k){
              impossible = true;
              break;
          }
          evenCount++;
      }else{
          //奇数
          let curOddLen = oddArr.length;
          if(curOddLen<k){
              //直接添加
              oddArr.push({index:i,evenCountBefore:evenCount});
              evenCount = 0;
          }else{
              let left = oddArr[curOddLen-k].evenCountBefore;
              let right = i-oddArr[curOddLen-1].index-1;
              res+=(left+1)*(right+1);
              oddArr.push({index:i,evenCountBefore:evenCount});
              evenCount = 0;
          }
      }
  }  
  if(impossible){
      return 0;   
  }

  let lastNum = nums[len-1];
  if(lastNum%2===0){
    let left = oddArr[oddArr.length-k].evenCountBefore;
    let right = len-1-oddArr[oddArr.length-1].index;
    res+=(left+1)*(right+1);
  }else{
    let left = oddArr[oddArr.length-k].evenCountBefore;
    let right = 0;
    res+=(left+1)*(right+1);
  }


  return res;
};

console.log(numberOfSubarrays([45627,50891,94884,11286,35337,46414,62029,20247,72789,89158,54203,79628,25920,16832,47469,80909]
    ,1));