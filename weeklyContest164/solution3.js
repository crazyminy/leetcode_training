/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let isLastMatch = false;
    let res = [];
    let len = searchWord.length;
    for(let i = 0;i<len;i++){
        isLastMatch = false;
        let ch = searchWord.charAt(i);
        let left = products.length;
        if(left === 0){
            res.push([]);
        }else{
            for(let j = 0;j<left;j++){

                let item = products.shift();
                if(item.charAt(i)===ch){
                    products.push(item);
                    isLastMatch = true;
                }else{
                    if(isLastMatch){//在匹配失败的情况下，上一个是匹配成功的，这意味着之后的都会匹配失败，所以干掉他
                        for(let times = 0;times<left-j-1;times++){
                            products.shift();
                        }
                        break;
                    }
                    isLastMatch = false;
                   
                }
            }
            let arrayNew = JSON.parse(JSON.stringify(products));
            while(arrayNew.length>3){
                arrayNew.pop();
            }
            res.push(arrayNew);
        }
       
    }
    return res;
};

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse"));