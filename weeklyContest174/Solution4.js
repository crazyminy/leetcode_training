/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    let dp = new Array(arr.length).fill(0);
    let res = [0];
    let nodeArr = arr.map((val,index)=>new Node(index,val));
    nodeArr.sort((n1,n2)=>n1.val-n2.val);
    nodeArr.forEach((node)=>{
        doSearch(node,res,dp,arr,d);
    });
    return res[0];
};

/**
 * 
 * @param {Node} node 
 * @param {number[]} maxVal 
 * @param {number[]} dp 
 * @param {number[]} arr 
 * @param {number} d
 */
function doSearch(node,maxVal,dp,arr,d){
    let centerIndex = node.index;
    let threshold = node.val;
    let curMax = 0;
    for(let i = centerIndex-1;i>=0&&i>=centerIndex-d;i--){
        if(arr[i]>=threshold){
            break;
        }
        if(dp[i]>curMax){
            curMax = dp[i];
        }

        
    }
    for(let i = centerIndex+1;i<arr.length&&i<=centerIndex+d;i++){
        if(arr[i]>=threshold){
            break;
        }
        if(dp[i]>curMax){
            curMax = dp[i];
        }
    }
    dp[centerIndex] = curMax+1;
    if(curMax+1>maxVal[0]){
        maxVal[0] = curMax+1;
    }

}
function Node(index,val){
    this.index = index;
    this.val = val;
}

console.log(maxJumps([6,4,14,6,8,13,9,7,10,6,12], 2));
