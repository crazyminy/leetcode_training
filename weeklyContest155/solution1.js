/**
 * 
 * 5230. 缀点成线
 * 在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 <font color="#c7254e" face="Menlo, Monaco, Consolas, Courier New, monospace">true</font>，否则请返回 <font color="#c7254e" face="Menlo, Monaco, Consolas, Courier New, monospace">false</font>。


 */

 /**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let point1 = coordinates[0];
    let point2 = coordinates[1];

    let x1=point1[0],x2=point2[0],y1=point1[1],y2=point2[1];
    let disX = x2-x1;
    let disY = y2-y1;

    

    let res = false;
    //只有x的情况 形如x=1
    if(point1[0] === point2[0]){
        let constX = point2[0];
        for(let i = 2;i<coordinates.length;i++){
            if(coordinates[i][0]!==constX){
                return res;
            }
        }
        res = true;
    }else{
        let rate  = disY/disX;
        //形如y=ax+b
        for(let i = 2;i<coordinates.length;i++){
            let testX = coordinates[i][0];
            let testY = coordinates[i][1];
            let testDisX = testX-x1;
            let testDisY = testY-y1;
            if(testDisY/testDisX !== rate){
                return res;
            }
        }
        res = true;
    }
    return res;
};

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));