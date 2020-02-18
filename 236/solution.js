
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = [];
    dfs(res,[],p,q,root);
    console.log(res);
    let path1 = res[0];
    let path2 = res[1];
    let target = root;
    for(let i = 0;i<path1.length&&i<path2.length;i++){
        if(path1[i].val === path2[i].val){
            target = path1[i];
        }else{
            break;
        }
    }
    return target;
};

function dfs(res,path,p,q,node){
    if(res.length === 2) return;
    if(node === null) return;
    path.push(node);
    if(node.val === p || node.val === q){
        res.push(Array.from(path));
    }
    dfs(res,path,p,q,node.left);
    dfs(res,path,p,q,node.right);
    path.pop();
}


let node1 = new TreeNode(3);
let node2 = new TreeNode(5);
let node3 = new TreeNode(1);
let node4 = new TreeNode(6);
let node5 = new TreeNode(2);
let node6 = new TreeNode(0);
let node7 = new TreeNode(8);
let node8 = new TreeNode(7);
let node9 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

console.log(lowestCommonAncestor(node1,5,4));