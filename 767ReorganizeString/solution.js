/* 
767. Reorganize String
    重构字符串

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorganize-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let map = new Map();
    for(let i = 0;i<S.length;i++){
        let ch = S.charAt(i);
        if(map.has(ch)){
            map.set(ch,map.get(ch)+1);
        }else{
            map.set(ch,1);
        }
    }//初始化字符映射

    let ch_arr = [];
    map.forEach(function(val,key){
        //console.log(val+"<-"+key);
        ch_arr.push({ch:key,num:val});
    });

    ch_arr.sort((a,b)=>b.num-a.num);//排序

    console.log(ch_arr);

    if(ch_arr[0].num > (S.length+1)/2){
        return "";
    }

    let odd = 1,even = 0
    let res = new Array(S.length);
    ch_arr.forEach(function(item){
        while(item.num>0&&even<S.length){
            res[even] = item.ch;
            item.num--;
            even+=2;
        }
        while(item.num>0){
            res[odd] = item.ch;
            item.num--;
            odd+=2;
        }
    })
    return res.join("");
};

console.log(reorganizeString("rvhrlpiesrrryrbrrrrrxrkirranrrrrbdrrzgasoxrrr"));