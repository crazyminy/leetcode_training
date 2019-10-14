/*
22 GenerateParentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let lf_arr = [n,n];
  let limit = n;
  let res = [];
  let stack = "";
  let ch_arr = ['(',')']
  if(n<=0){
      return [];
  }
  doGenerate(stack,res,lf_arr);
  return res;
};

function doGenerate(stack,res,lf_arr){
    if(lf_arr[0]===0){
        let times1 = lf_arr[1];
        stack = stack+')'.repeat(times1);
        res.push(stack);
        return;
    }
    let temp0 = lf_arr[0];
    let temp1 = lf_arr[1];

    stack = stack+'(';
    lf_arr[0] = temp0-1;
    doGenerate(stack,res,lf_arr);
    lf_arr[0] = temp0;
    stack = stack.slice(0,stack.length-1);

    if(temp1>temp0){
        stack = stack+')';
        lf_arr[1] = temp1-1;
        doGenerate(stack,res,lf_arr);
        lf_arr[1] = temp1;
        stack = stack.slice(0,stack.length-1);
    }
}

console.log(generateParenthesis(3));