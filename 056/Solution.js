/**
 * 给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        return a[0] - b[0];
    });
    for(let i = 0;i<intervals.length-1;i++){
        let cur = intervals[i];
        for(let j = i+1;j<intervals.length;){
            let next = intervals[j];
            if(cur[1]>=next[0]){
                cur[1] = Math.max(next[1],cur[1]);
                intervals.splice(j,1);
            }else{
                j++;
            }
        }
    }

    console.log(intervals)
};

merge([[1,3],[2,6],[8,10],[15,18]]);