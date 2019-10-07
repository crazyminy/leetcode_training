/* 力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：

U: 向y轴正方向移动一格
R: 向x轴正方向移动一格。
不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。

给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。

 

示例 1：

输入：command = "URR", obstacles = [], x = 3, y = 2
输出：true
解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。
示例 2：

输入：command = "URR", obstacles = [[2, 2]], x = 3, y = 2
输出：false
解释：机器人在到达终点前会碰到(2, 2)的障碍物。
示例 3：

输入：command = "URR", obstacles = [[4, 2]], x = 3, y = 2
输出：true
解释：到达终点后，再碰到障碍物也不影响返回结果。
 

限制：

2 <= command的长度 <= 1000
command由U，R构成，且至少有一个U，至少有一个R
0 <= x <= 1e9, 0 <= y <= 1e9
0 <= obstacles的长度 <= 1000
obstacles[i]不为原点或者终点

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/programmable-robot
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
    let curx = 0;
    let cury = 0;
    let command_list = command.split("");


    let mat = getMat(obstacles,x,y);
    
    while(curx<=x&&cury<=y){
        
        let com = command_list.shift();
        command_list.push(com);
        if(com === "U"){
            cury++;
        }else{
            curx++;
        }
        if(mat[curx][cury] === true){
            return false;
        }
        if(curx==x&&cury==y){
            return true;
        }
    }
    return false;

};

function getMat(obstacles,x,y){
    let mat = [];
    let xMax = x;
    let yMax = y;
    for(let i = 0;i<obstacles.length;i++){
        let point = obstacles[i];
        xMax = point[0]>xMax?point[0]:xMax;
        yMax = point[1]>xMax?point[1]:yMax;
    }
    yMax++,xMax++;
    for(let i = 0;i<xMax;i++){
        let arr = new Array(yMax);
        mat.push(arr);
    }

    for(let i = 0;i<obstacles.length;i++){
        let point = obstacles[i];
        mat[point[0]][point[1]] = true;
        //console.log(mat[point[0]-1][point[1]-1]);
    }

    return mat;
}

console.log(robot("RUUR",[[10,5],[1,6],[6,10],[3,0],[0,3],[0,10],[6,2]],7856,9033));