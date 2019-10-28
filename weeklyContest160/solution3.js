/* 


5240. 串联字符串的最大长度 显示英文描述 
用户通过次数152
用户尝试次数270
通过次数155
提交次数503
题目难度Medium
给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。

请返回所有可行解 s 中最长长度。

 

示例 1：

输入：arr = ["un","iq","ue"]
输出：4
解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
示例 2：

输入：arr = ["cha","r","act","ers"]
输出：6
解释：可能的解答有 "chaers" 和 "acters"。
示例 3：

输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
输出：26
 

提示：

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] 中只含有小写英文字母*/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let len = arr.length;
    let newArr =[];
    for(let i = 0;i<len;i++){
        let res1 = handleSingleStr(arr[i]);
        if(!res1){
            //
        }else{
            newArr.push(res1);
        }
    }
    //console.log(arr);
    //len = arr.length;
    let res = {maxLength:0};
    DFS(new Set(),newArr,0,res);
    console.log(res);
    return res.maxLength;
};

function handleSingleStr(str){
    let len = str.length;
    let set = new Set();
    for(let i = 0;i<len;i++){
        let ch = str.charAt(i);
        if(set.has(ch)){
            return false;
        }else{
            set.add(ch);
        }
    }
    return set;
}



function DFS(curSet,setArr,depth,res){
    if(depth===setArr.length){
        return;
    }
    let thisSet = setArr[depth];
    //加
    //检验是否有重复元素
    if(!isHasSameEle(curSet,thisSet)){
        let arr1 = [...curSet];
        let arr2 = [...thisSet];
        let newSet = new Set(arr1.concat(arr2));
        if(newSet.size>res.maxLength){
            res.maxLength = newSet.size;
        }
        DFS(newSet,setArr,depth+1,res);
    }
    //不加
    DFS(curSet,setArr,depth+1,res);
}


function isHasSameEle(curSet,thisSet){
    let lessOne = curSet.size<thisSet.size?curSet:thisSet;
    let moreOne = curSet.size<thisSet.size?thisSet:curSet;
    for(let item of lessOne){
        if(moreOne.has(item)){
            return true;
        }
    }
    return false;
}
maxLength(["yy","bkhwmpbiisbldzknpm"])