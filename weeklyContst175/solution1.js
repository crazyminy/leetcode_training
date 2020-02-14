/**
 * 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

更正式地，检查是否存在两个下标 i 和 j 满足：

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set(arr);
    let res = false;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            if(set.has(arr[i]/2)){
                if(arr[i] === 0){
                    let i1 = arr.indexOf(0);
                    let i2 = arr.lastIndexOf(0);
                    if(i1!==i2){
                        res = true;
                        break;
                    }
                }else{
                    res = true;
                    break;
                }
            }
        }
        if(set.has(arr[i]*2)){
            if(arr[i]!==0){
                res = true;
                break;
            }        
        }
    }
    return res;
};

console.log(checkIfExist([10,2,7,3,0,4]));