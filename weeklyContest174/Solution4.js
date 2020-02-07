// /**
//  * @param {number[]} arr
//  * @param {number} d
//  * @return {number}
//  */
// var maxJumps = function(arr, d) {
//     let set = new Set(arr);
//     let sortedArr = Array.from(set);
//     sortedArr.sort((a,b)=>(b-a));
//     let maxVal = sortedArr[0];
//     console.log(sortedArr);
//     let dp = new Array(arr.length).fill(0);
//     for(let i = 0;i<arr.length;i++){
//         if(dp[i]!==0){
//             doSearch(i,d,maxVal,dp,arr);
//         }
//     }

// };

// function doSearch(index,d,maxVal,dp,arr){
//     for(let i = 1;i<=d;i++){
//         let left = index-i<0?-1:arr[index-i];
//         let right = index+i>dp.length-1?-1:arr[index+i];

        

//     }
    
// }

// maxJumps([6,4,14,6,8,13,9,7,10,6,12], 2);


let 
let arrs = data.split("-");
let year = parseInt(arrs[0]);
let month = parseInt(arrs[1]);
let day = parseInt(arrs[2]);
function judge(year){
    if(year%400 === 0){
        return true;
    }
    return year%4 ===0 && year%100!==0
}

var monthMapDays = [
    0,
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
]

if(judge(year)){
    monthMapDays[2]++;
}
let res = 0;
for(let i = 1;i<month;i++){
    res+=monthMapDays[i];
}

res+=day;
console.log(res);