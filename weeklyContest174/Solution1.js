/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let resFull = [];
    for(let i = 0;i<mat.length;i++){
        resFull.push(new MyObj(i,getNum(mat[i])));
    }
    resFull.sort((a,b)=>{
        if(a.num!==b.num){
            return a.num-b.num;
        }else{
            return a.index -b.index;
        }
    })

    //console.log(resFull);
    let middle = resFull.slice(0,k);
    return middle.map((item,index)=>{
        return item.index;
    })
};
function MyObj(index,num){
    this.index = index;
    this.num = num;
}
function getNum(arr){
    let num = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 1){
            num++;
        }else{
            break;
        }
    }
    return num;
}

console.log(kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3));