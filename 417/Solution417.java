

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/*

417. 太平洋大西洋水流问题
给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。

规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。

请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

 

提示：

输出坐标的顺序不重要
m 和 n 都小于150
 

示例：

 

给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

返回:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元).
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pacific-atlantic-water-flow
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
public class Solution417 {
	
	public static void main(String[] args) {
		Solution417 solution = new Solution417();
		int[][] matrix = new int[][] 
				{{1,2,2,3,5},{3,2,3,4,4},{2,4,5,3,1},{6,7,1,4,5},{5,1,1,2,4}};
		solution.pacificAtlantic(matrix);
	}
	public List<List<Integer>> pacificAtlantic(int[][] matrix) {
		List<List<Integer>> res = new ArrayList<List<Integer>>();
		if(matrix.length == 0 || matrix[0].length == 0) {
			return res;
		}
		int row = matrix.length;
		int col = matrix[0].length;
		Queue<int[]> pacificQue = new LinkedList<int[]>();
		Queue<int[]> atlanticQue = new LinkedList<int[]>();
		for(int i = 0;i<row;i++) {
			for(int j = 0;j<col;j++) {
				if(i == 0 || j == 0) {
					pacificQue.add(new int[] {i,j});
				}
				if(i == row-1 || j == col-1) {
					atlanticQue.offer(new int[] {i,j});
				}
			}
		}
		
		int[][] pacificAux = new int[row][col];
		int[][] atlanticAux = new int[row][col];
		
		BFS(matrix,pacificAux,pacificQue,row,col);
		BFS(matrix,atlanticAux,atlanticQue,row,col);
		System.out.println(pacificAux);
        System.out.println(atlanticAux);
		for(int i = 0;i<row;i++) {
			for(int j = 0;j<col;j++) {
				if(pacificAux[i][j]==1 && atlanticAux[i][j]==1) {
					res.add(Arrays.asList(i,j));
				}
			}
		}
		
        return res;
    }
	
	private void BFS(int[][] matrix,int[][] aux,Queue<int[]> Que,int row,int col) {
		int[] dx = {1,0,-1,0};
		int[] dy = {0,1,0,-1};
		while(!Que.isEmpty()) {
			int[] cur = Que.poll();
			
			if(aux[cur[0]][cur[1]] == 1) continue;
			aux[cur[0]][cur[1]] = 1;
			for(int i = 0;i<4;i++) {
				int nx = cur[0]+dx[i];
				int ny = cur[1]+dy[i];
				if(nx>=0 && nx<row && ny>=0 && ny<col&&matrix[nx][ny]>=matrix[cur[0]][cur[1]]) {
					Que.offer(new int[] {nx,ny});
				}
			}
		}
	}
}
