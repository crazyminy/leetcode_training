/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let mapArray = [
        [],
        [],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ]
    let res = [];
    if(digits.length === 0){
        return res;
    }else{
        dfs(res,0,mapArray,digits);
        return res;
    }
};

function dfs(res,depth,mapArray,digits,tempedArr=[]){
    if(depth<digits.length){
        let curChArr = mapArray[parseInt(digits.charAt(depth))];
        for(let i = 0;i<curChArr.length;i++){
            let ch = curChArr[i];
            tempedArr.push(ch);
            dfs(res,depth+1,mapArray,digits,tempedArr);
            tempedArr.pop();
        }
    }else{
        res.push(tempedArr.join(''));
    }
}

console.log(letterCombinations("23"));