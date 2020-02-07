/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
  var levelOrder = function(root) {
      let curQueue = [];
      let nextQueue = [];
      
      if(root === null){
        return [[]];
      }
      let res = [];
      let curRes = [];
      curQueue.push(root);
      while(curQueue.length!==0){
        curQueue.forEach((node)=>{
          curRes.push(node.val);
          if(node.left){
            nextQueue.push(node.left);
          }
          if(node.right){
            nextQueue.push(node.right);
          }
        })
        res.push(curRes);
        curRes = [];
        curQueue = nextQueue;
        nextQueue = [];

       
      }
      return res;
  };

  let node3 = new TreeNode(3);
  let node9 = new TreeNode(9);
  let node20 = new TreeNode(20);
  let node15 = new TreeNode(15);
  let node7 = new TreeNode(7);
  node3.left = node9;
  node3.right = node20;
  node20.left = node15;
  node20.right = node7;
  levelOrder(node3);