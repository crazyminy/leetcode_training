/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let offset = findOffset(nums);
    if(offset === 0){
         return searchNum(nums,target,0,nums.length-1);
    }else{
        let res1 = searchNum(nums,target,0,offset-1);
        let res2 = searchNum(nums,target,offset,nums.length-1);
        if(res1===-1){
            return res2;
        }else{
            return res1;
        }
    }
};

function searchNum(nums,target,st,ed){
    if(st<ed){
        let mid = Math.floor((st+ed)/2);
        if(nums[mid]>target){
            return searchNum(nums,target,st,mid-1);
        }else if(nums[mid]<target){
            return searchNum(nums,target,mid+1,ed);
        }else{
            return mid;
        }
    }else {
        if(target!==nums[ed]){
            return -1;
        }else{
            return ed;
        }   
    }
}

function findOffset(nums){
    let len = nums.length;
    //先找到nums的偏移点
    let st = 0;
    let ed = len-1;
    while(st<ed){
        let mid = Math.floor((st+ed)/2);
        if(nums[mid]>nums[ed]){
            //说明偏移点在右边
            st = mid+1;
        }else{
            ed = mid;
        }
    }
    //console.log(ed);
    return ed;
}

console.log(search([5,1,3],0));