/**
 * 给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // let res = [];
    // if(root !== null){
    //     recursion(root,res);    
    // }
    // return res;

    return iteration(root);
};

/**
 * 
 * @param {TreeNode} root 
 * @param {Array} res 
 */
function recursion(root,res){
    
        if(root.left!==null){
            recursion(root.left,res);
        }
        res.push(root.val);
        if(root.right!==null){
            recursion(root.right,res);
        }
        
}

function iteration(root){
    let stack = [];
    let res = [];
    if(root === null){
        return [];
    }
    stack.push(root);
    while(stack.length !== 0){
        let cur = stack[stack.length-1];
        if(cur.left === null || cur.left.visited){
            cur = stack.pop();
            res.push(cur.val);
            cur.visited = true;
            if(cur.right){
                stack.push(cur.right);
            }
        }else{
            stack.push(cur.left);
        }
    }
    return res;
}


let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

node1.right = node2;
node2.left = node3;

console.log(inorderTraversal(node1));