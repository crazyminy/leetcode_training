/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row = grid.length;
    let col = 0;
    if(row>0){
        col = grid[0].length;
    }
    if(col === 0){
        return 0;
    }
    let res = 0;
    for(let i = 0;i<row;i++){
        for(let j = 0;j<col;j++){
            if(grid[i][j]==="1"){
                res++;
                bfs(grid,i,j,row,col); 
                //console.log(grid);     
            }
        }
    }
    return res;
};

/**
 * 
 * @param {character[][]} grid 
 * @param {number} i 
 * @param {number} j 
 */
function bfs(grid,i,j,row,col){
    if(grid[i][j] === "1"){
        grid[i][j] = "2";
        if(i+1<row){
            bfs(grid,i+1,j,row,col);
        }
        if(i-1>=0){
            bfs(grid,i-1,j,row,col);
        }
        if(j-1>=0){
            bfs(grid,i,j-1,row,col);
        }
        if(j+1<col){
            bfs(grid,i,j+1,row,col);
        }
    }
}

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))