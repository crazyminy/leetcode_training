/* 
5068. 前后拼接
给你一个「短语」列表 phrases，请你帮忙按规则生成拼接后的「新短语」列表。

「短语」（phrase）是仅由小写英文字母和空格组成的字符串。「短语」的开头和结尾都不会出现空格，「短语」中的空格不会连续出现。

「前后拼接」（Before and After puzzles）是合并两个「短语」形成「新短语」的方法。我们规定拼接时，第一个短语的最后一个单词 和 第二个短语的第一个单词 必须相同。

返回每两个「短语」 phrases[i] 和 phrases[j]（i != j）进行「前后拼接」得到的「新短语」。

注意，两个「短语」拼接时的顺序也很重要，我们需要同时考虑这两个「短语」。另外，同一个「短语」可以多次参与拼接，但「新短语」不能再参与拼接。

请你按字典序排列并返回「新短语」列表，列表中的字符串应该是 不重复的 。

 

示例 1：

输入：phrases = ["writing code","code rocks"]
输出：["writing code rocks"]
示例 2：

输入：phrases = ["mission statement",
                "a quick bite to eat",
                "a chip off the old block",
                "chocolate bar",
                "mission impossible",
                "a man on a mission",
                "block party",
                "eat my words",
                "bar of soap"]
输出：["a chip off the old block party",
      "a man on a mission impossible",
      "a man on a mission statement",
      "a quick bite to eat my words",
      "chocolate bar of soap"]
示例 3：

输入：phrases = ["a","b","a"]
输出：["a"] */

/**
 * @param {string[]} phrases
 * @return {string[]}
 */
var beforeAndAfterPuzzles = function(phrases) {
    let mapHead = new Map();
    let mapEnd = new Map();
    for(let i = 0;i<phrases.length;i++){
        let ele = phrases[i];
        let arr = ele.split(" ");
        let head = arr[0];
        let end = arr[arr.length-1];

        if(mapHead.has(head)){
            let arr = mapHead.get(head)
            arr.push(i);
            mapHead.set(head,arr);
        }else{
            mapHead.set(head,[i]);
        }

        if(mapEnd.has(end)){
            let arr = mapEnd.get(end);
            arr.push(i);
            mapEnd.set(end,arr);
        }else{
            mapEnd.set(end,[i]);
        }
    };

    let resultSet = new Set();

    mapEnd.forEach(function(value,key,map){
        let arr1 = value;
        if(!mapHead.has(key)){
            return true;
        }
        let arr2 = mapHead.get(key);

        arr1.forEach(index1=>{
            arr2.forEach(index2=>{
                if(index1!==index2){
                    let str = add(phrases[index1],phrases[index2]);
                    resultSet.add(str);
                }
            });
        });
    })

    let answer = Array.from(resultSet);
    answer.sort();
    console.log(answer);
}; 

function add(str1,str2){
    let arr1 = str1.split(" ");
    let arr2 = str2.split(" ");
    arr2.splice(0,1);
    let result = arr1.concat(arr2);
    let str = result.join(" ");
    return str;
}

/* let map = new Map();
map.set("a",[1,2]);
map.set("b",[2,3]);
console.log(map);
map.forEach(function (value, key, map) {
    console.log(value);
    console.log(key);
  }); */

  beforeAndAfterPuzzles( ["mission statement","a quick bite to eat","a chip off the old block","chocolate bar","mission impossible","a man on a mission","block party","eat my words","bar of soap"]);