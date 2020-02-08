/**
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。

如果小数部分为循环小数，则将循环的部分括在括号内。

示例 1:

输入: numerator = 1, denominator = 2
输出: "0.5"
示例 2:

输入: numerator = 2, denominator = 1
输出: "2"
示例 3:

输入: numerator = 2, denominator = 3
输出: "0.(6)"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fraction-to-recurring-decimal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0){
        return "0";
    }
    let set = {};
    let res = [];
    if(numerator*denominator<0){
        res.push("-");
       
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    if(numerator>denominator){
        res.push(parseInt(numerator/denominator));
        
        numerator = numerator%denominator;
        if(numerator !== 0){
            res.push(".")
        }
    }else if(numerator === denominator){
        return "1";
    }else{
        res.push(0);
        res.push(".")
    }
    loop(numerator,denominator,set,res);
    return res.join("");
};

/**
 * 
 * @param {number} numerator 
 * @param {number} denominator 
 * @param {Object} set 
 * @param {Array} res 
 */
function loop(numerator,denominator,set,res){
    if(numerator === 0){
        return 0;
    }
    let key = numerator+"_"+denominator;
    if(set[key] === undefined){
        //正常往下
        set[key] = res.length;
        if(numerator*10<denominator){
            res.push(0);
            loop(numerator*10,denominator,set,res);
        }else if(numerator*10 === denominator){
            res.push(1);
        }else{
            res.push(parseInt(numerator*10/denominator));
            loop(numerator*10%denominator,denominator,set,res);
        }
    }else{
        //处理循环
        res.push(")");
        res.splice(set[key],0,"(");
    }
}

console.log(fractionToDecimal(4,3));