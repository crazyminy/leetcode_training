/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //小根堆实现
    buildHeap(nums,k);
    for(let i = k;i<nums.length;i++){
        if(nums[i]>nums[0]){
            swap(nums,i,0);
            heapify(nums,k,0);
        }
    }
    return nums[0];
};

function buildHeap(nums,k){
    let threshold = Math.floor(k/2-1);
    for(let i = threshold;i>=0;i--){
        heapify(nums,k,i);
    }
}

function heapify(nums,k,index){
    let threshold = Math.floor(k/2-1);
    if(index > threshold) return;
    let [largerIndex,largerVal] = [2*index+1,nums[2*index+1]];
    if(2*index+2<k){
        [largerIndex,largerVal] = nums[2*index+1]<nums[2*index+2]?[2*index+1,nums[2*index+1]]:[2*index+2,nums[2*index+2]];
    }
    if(nums[index]>largerVal){
        swap(nums,index,largerIndex);
        heapify(nums,k,largerIndex);
    }
}

function swap(nums,index1,index2){
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

let i = findKthLargest([3,2,1,5,6,4]
    ,2)

console.log(i);