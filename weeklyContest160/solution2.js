/* 
5239. 循环码排列
给你两个整数 n 和 start。你的任务是返回任意 (0,1,2,,...,2^n-1) 的排列 p，并且满足：

p[0] = start
p[i] 和 p[i+1] 的二进制表示形式只有一位不同
p[0] 和 p[2^n -1] 的二进制表示形式也只有一位不同
 

示例 1：

输入：n = 2, start = 3
输出：[3,2,0,1]
解释：这个排列的二进制表示是 (11,10,00,01)
     所有的相邻元素都有一位是不同的，另一个有效的排列是 [3,1,0,2]
示例 2：

输出：n = 3, start = 2
输出：[2,6,7,5,4,0,1,3]
解释：这个排列的二进制表示是 (010,110,111,101,100,000,001,011)
 

提示：

1 <= n <= 16
0 <= start < 2^n*/

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
    let strArr = new Array(n).fill(0);
    let res1 = [];
    res1.push(0);
    let num = Math.pow(2,n);
    for(let i =1;i<num;i++){
        if(i%2===1){
            firstMethod(strArr);
        }else{
            secondMethod(strArr);
        }
        res1.push(computeVal(strArr));
    }
    //console.log(res1);
    let index;
    for(let i =0;i<num;i++){
        if(res1[i]===start){
            // res1.push(res1.shift());
            index = i;
            break;
        }
    }
    for(let i = 0;i<index;i++){
        res1.push(res1.shift());
    }
    console.log(res1);
    return res1;
};


function firstMethod(strArr){
    if(strArr[0]===0){
        strArr[0] = 1
    }else{
        strArr[0] = 0;
    }
}

function secondMethod(strArr){
    let len = strArr.length;
    for(let i = 0;i<len;i++){
        if(strArr[i]===1){
            let temp = strArr[i+1];
            strArr[i+1] = (temp===1?0:1);
            break;
        }
    }
}

function computeVal(strArr){
    let len = strArr.length;
    let sum = 0;
    let mul = 1;
    for(let i = 0;i<len;i++){
        sum += mul*strArr[i];
        mul*=2; 
    }
    return sum;
}

circularPermutation(4,5);