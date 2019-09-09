/*
46. Permutations (全排列)
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let res = [];//结果列表
    let stark = [];//存储路径的栈
    let curLen = 0;//当前节点深度
    let targetLen = nums.length;
    let visited = [];
    for(let i = 0;i<nums.length;i++){
        visited.push(false);
    }
    if(targetLen === 0){
        return [];
    }
    generatePermution(nums,res,stark,curLen,targetLen,visited);

    return res;
};

function generatePermution(nums,res,stark,curLen,targetLen,visited){
    if(curLen === targetLen){
        //已经到了最深层
        res.push(Array.from(stark));
        return;
    }
    for(let i = 0;i<nums.length;i++){
        if(!visited[i]){
            visited[i] = true;
            stark.push(nums[i]);
            generatePermution(nums,res,stark,curLen+1,targetLen,visited);
            stark.pop();
            visited[i] = false;
        }
    }
}

console.log(permute([1,2,3]));