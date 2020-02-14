/**
 * 给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。

返回使 t 成为 s 的字母异位词的最小步骤数。

字母异位词 指字母相同，但排列不同的字符串。

 
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let len = s.length;
    if(len === 0){
        return 0;
    }
    let chMap = {};
    for(let i = 0;i<len;i++){
        let ch = s.charAt(i);
        if(chMap[ch] === undefined){
            chMap[ch] = 1;
        }else{
            chMap[ch]++;
        }
    }
    let res = 0;
    let chMap1 = {};
    for(let i = 0;i<len;i++){
        let ch = t.charAt(i);
        if(chMap[ch] === undefined){
            res++;
        }else{
            if(chMap1[ch] === undefined){
                chMap1[ch] = 1;
            }else{
                chMap1[ch]++;
            }
        }
    }

    Object.keys(chMap1).forEach(function(ch){
        if(chMap1[ch]>chMap[ch]){
            res+=chMap1[ch]-chMap[ch];
        }
    })

    return res;
    

  
};

console.log(minSteps("leetcode","practice"))