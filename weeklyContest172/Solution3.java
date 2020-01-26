package WeeklyContest172;

/*
*
* 注意，一旦删除值为 target 的叶子节点，它的父节点就可能变成叶子节点；如果新叶子节点的值恰好也是 target ，那么这个节点也应该被删除。

也就是说，你需要重复此过程直到不能继续删除。

 

示例 1：



输入：root = [1,2,3,2,null,2,4], target = 2
输出：[1,null,3,null,4]
解释：
上面左边的图中，绿色节点为叶子节点，且它们的值与 target 相同（同为 2 ），它们会被删除，得到中间的图。
有一个新的节点变成了叶子节点且它的值与 target 相同，所以将再次进行删除，从而得到最右边的图。
示例 2：



输入：root = [1,3,3,3,2], target = 3
输出：[1,3,null,null,2]
示例 3：



输入：root = [1,2,null,2,null,2], target = 2
输出：[1]
解释：每一步都删除一个绿色的叶子节点（值为 2）。
示例 4：

输入：root = [1,1,1], target = 1
输出：[]
示例 5：

输入：root = [1,2,3], target = 1
输出：[1,2,3]
 

提示：

1 <= target <= 1000
每一棵树最多有 3000 个节点。
每一个节点值的范围是 [1, 1000] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-leaves-with-a-given-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

class TreeNode{
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
public class Solution3 {
    public TreeNode removeLeafNodes(TreeNode root, int target) {
        return LeftRightMid(root,target);
    }

    //后序遍历
    TreeNode LeftRightMid(TreeNode root, int target){
        //左
        root.left = root.left==null?null:LeftRightMid(root.left,target);
        //右
        root.right = root.right==null?null:LeftRightMid(root.right,target);

        //根
        if(root.right == null && root.left == null && target==root.val){
            return null;
        }else{
            return root;
        }
    }
}
