//https://leetcode-cn.com/problems/path-sum-ii/
//113 Path sum II

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

/* var pathSum = function(root, sum) {
    while(p)
}; */


function Node(val){
    this.val = val;
    this.left = this.right = null;
}

function initial(){
    let n1 = new Node(5);
    let n2 = new Node(4);
    let n3 = new Node(8);
    let n4 = new Node(11);
    let n5 = new Node(13);
    let n6 = new Node(4);
    let n7 = new Node(7);
    let n8 = new Node(2);
    let n9 = new Node(5);
    let n10 = new Node(1);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n3.left = n5;
    n3.right = n6;
    n4.left = n7;
    n4.right = n8;
    n5.left = n9;
    n5.right = n10;

    console.log("initial finished");

    return n1;
}

let tree_root = initial();

var leafList = [];

function hasPathSum(root,sum){
    if(root){
        let sum_ = sum - root.val;
        if(root.right == null && root.left == null){
            return (sum_ === 0);
        }
        return hasPathSum(root.left,sum_)||hasPathSum(root.right,sum_);
    }else{
        return false;
    }
}