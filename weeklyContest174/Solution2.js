/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let len = arr.length;
    let map = {};
    arr.forEach((value,index)=>{
        if(map[value]==undefined){
            map[value] = 1;
        }else{
            map[value]++;
        }
    });
    let arrToSored = []
    Object.keys(map).forEach((keyName)=>{
        arrToSored.push(map[keyName])
    });
    
    arrToSored.sort((a,b)=>b-a);
    //console.log(arrToSored);
    let res = 0
    let sum = 0;
    let target = len/2;
    while(sum<target){
        sum+=arrToSored.shift();
        res++;
    }
    return res;
};



console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));