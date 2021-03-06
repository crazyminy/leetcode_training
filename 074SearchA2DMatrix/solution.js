/* 
74. 搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
示例 1:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
示例 2:

输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let res = false;

    let row = matrix.length;
    if(row === 0){
        return res;
    }
    let col = matrix[0].length;

    if(target<matrix[0][0]||target>matrix[row-1][col-1]){
        return res;
    }

    for(let i = 0;i<row;i++){
        if(matrix[i][0]>target){
            continue;
        }else{
            if(matrix[i][col-1]<target){
                continue;
            }else{
                for(let j = 0;j<col;j++){
                    if(matrix[i][j]===target){
                        res = true;
                        return res;
                    }
                }
            }
        }
    }
    return res;
};

console.log(searchMatrix([
    [1]
  ],1));