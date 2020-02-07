/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    //后序遍历 得到总和
    //和可能的因子
    let set = new Set();
    let allSum = leftRightRoot(root,set);
    let arr = Array.from(set);
    let maxMuti = 0;
    for(let i = 0;i<arr.length;i++){
        let yinzi1 = arr[i];
        let yinzi2 = allSum - yinzi1;
        maxMuti = Math.max(maxMuti,yinzi1*yinzi2);
    }

    console.log(maxMuti%(Math.pow(10,9)+7));
};
/**
 * 
 * @param {TreeNode} root 
 * @param {Set} set
 */
function leftRightRoot(root,set){
    if(root!==null){
        let leftSum = leftRightRoot(root.left,set);
        let rightSum = leftRightRoot(root.right,set);
        root["sum"] = leftSum+rightSum+root.val;
        set.add(root.sum);
        return root.sum;
    }else{
        return 0;
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;

node1.right = node2;
node2.right = node4;
node4.right = node6;
node2.left = node3;
node4.left = node5;

maxProduct(node1);