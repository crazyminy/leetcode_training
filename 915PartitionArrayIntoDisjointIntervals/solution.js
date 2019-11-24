/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    let arr = A.map((ele,index)=>{
        return{num:ele,ind:index}
    });
    arr.sort((ele1,ele2)=>ele1.num-ele2.num);
    console.log(arr);

    let max = 0;
    let arrLeft = [];
    do{
        let item = arr.shift();
        if(item.ind>max){
            max = item.ind;
        }
        arrLeft.push(item);
    }while(arrLeft.length!=(max+1));
    //console.log(arrLeft.length);
    return(max+1);
};

partitionDisjoint([1,1,1,0,6,12]);