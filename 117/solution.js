/**
 * 给定一个二叉树

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 

示例：



输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
 

提示：

树中的节点数小于 6000
-100 <= node.val <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * // Definition for a Node.
 * 
 */

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    if(root === null){
        return root;
    }
    let p = root;
    let q = new Node();
  
    while(p!==null){
        let curQ = q;
        while(p!==null){
            if(p.left){
                curQ.next = p.left;
                curQ = curQ.next;
            }
            if(p.right){
                curQ.next = p.right;
                curQ = curQ.next;
            }
            p = p.next;
        }
        

        p = q.next;
        q = new Node();
    }
    return root;
};

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node7 = new Node(7);
node1.left = node2;
node2.left = node4;
node2.right = node5;
node1.right = node3;
node3.right = node7;

connect(node1);