/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //树中没有重复元素
    return getRootAndSplit(inorder,postorder);
};

/**
 * 
 * @param {number[]} inorder 
 * @param {number[]} postorder 
 */
function getRootAndSplit(inorder,postorder){
    if(inorder.length === 0){
        return null;
    }else if(inorder.length === 1){
        return new TreeNode(inorder[0]);
    }else{
        let rootVal = postorder[postorder.length-1];
        let rootNode = new TreeNode(rootVal);
        let index = inorder.indexOf(rootVal);
        rootNode.left = getRootAndSplit(inorder.slice(0,index),postorder.slice(0,index));
        rootNode.right = getRootAndSplit(inorder.slice(index+1),postorder.slice(index,-1));
        return rootNode;
    }
}

console.log(buildTree( [9,3,15,20,7],[9,15,7,20,3]));