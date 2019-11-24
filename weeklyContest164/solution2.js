/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let points = [];
    let row = grid.length;
    let col = grid[0].length;
    let serverRow = new Array(row).fill(0);
    let serverCol = new Array(col).fill(0);
    //先遍历一遍矩阵，找出所有服务器，并且记录行和列的情况
    for(let i = 0 ;i<row;i++){
        for(let j = 0 ;j<col;j++){
            if(grid[i][j] === 1){
                //是服务器
                serverRow[i]++;
                serverCol[j]++;
                points.push([i,j]);
            }
        }
    }
    // console.log(points);
    // console.log(serverCol);
    // console.log(serverRow);

    let res = 0;
    //遍历一遍点集
    for(let index = 0;index<points.length;index++){
        let i = points[index][0];
        let j = points[index][1];
        if(serverRow[i]>1||serverCol[j]>1){
            res++;
        }
    }

    return res;
};

console.log(countServers( [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]))