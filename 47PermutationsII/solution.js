/* 
47. Permutations II(全排列II)
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    let res = [];
    let stark = [];
    let curLen = 0;
    let targetLen = nums.length;
    let map = new Map();
    //生成一个map
    nums.forEach(ele=>{
        if(map.has(ele)){
            let curTimes = map.get(ele);
            map.set(ele,curTimes+1);
        }else{
            map.set(ele,1);
        }
    });

    if(map.length === 0){
        return [];
    }

    generatePermutations(map,curLen,targetLen,res,stark);

    return res;
};


function generatePermutations(map,curLen,targetLen,res,stark){
    if(curLen === targetLen){//到达叶子节点
        let child_ans = Array.from(stark);
        res.push(child_ans);
        return;
    }
    //未到达叶子节点
    for(item of map){
        if(item[1]!==0){
            let key = item[0];
            let value = item[1];
            map.set(key,value-1);
            stark.push(key);

            generatePermutations(map,curLen+1,targetLen,res,stark);

            stark.pop();
            map.set(key,value);
        }
    }
}

console.log(permuteUnique([1,1,3]));