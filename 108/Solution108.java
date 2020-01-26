
/*
* 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

import javax.xml.soap.Node;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class TreeNode{
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x){val = x;}
}

class Solution108 {
    public TreeNode sortedArrayToBST(int[] nums) {
        return recursive(nums,0,nums.length-1);
    }

    public TreeNode recursive(int[] nums,int start,int end){
        int length = end - start+1;
        int mid = start + length/2;
        if(length>1){
            TreeNode leftTree = recursive(nums,start,mid-1);
            TreeNode rightTree = recursive(nums,mid+1,end);
            TreeNode midNode = new TreeNode(nums[mid]);
            midNode.left = leftTree;
            midNode.right = rightTree;
            return  midNode;
        }else{
            TreeNode leaf = new TreeNode(nums[start]);
            return leaf;
        }
    }
}
