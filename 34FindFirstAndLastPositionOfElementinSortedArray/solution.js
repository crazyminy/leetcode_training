// 34. Find First and Last Position of Element in Sorted Array
// 34. 在排序数组中查找元素的第一个和最后一个位置

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(target<nums[0] || target>nums[nums.length-1]){
        return [-1,-1];
    }
    let start = 0;
    let end = nums.length-1;

    let mid;

    let position = -1;

    while(start<=end){
        mid = parseInt((start+end)/2);
        if(nums[mid]>target){//搜索左半边
            end = mid-1;
        }else if(nums[mid]<target){//搜索右半边
            start = mid+1;
        }else{//找到了等于的值，向两边探索
            position = mid;
            break;
        }
    }

    if(position == -1){
        return [-1,-1];
    }else{
        let s=position,e=position;
        while(nums[s-1]===target){
            s--;
        }
        while(nums[e+1]===target){
            e++;
        }
        return [s,e];
    }
};

console.log(searchRange([5,7,7,8,8,10],8));