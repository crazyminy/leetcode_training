/* 给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
 

提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let length = s.length;
    let arr = s.split("");
  
    let stack = [];

    for(let i = 0;i<length;i++){
        if(arr[i] === ")"){
            let toReverseArr = []
            let popch = stack.pop();
            while(popch !== "("){
                toReverseArr.push(popch);
                popch = stack.pop();
            }
            toReverseArr.forEach(function(ele){
                stack.push(ele);
            });
        }else{
            stack.push(arr[i]);
        }
    }
    console.log(stack.join(""));
    return stack.join();
};

reverseParentheses("a(bcdefghijkl(mno)p)q");