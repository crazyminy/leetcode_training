/**
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
         this.val = val;
         this.next = null;
     }

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head;
    if(cur==null){
        return null;
    }
    let next = head.next;
    if(next == null){
        return head;
    }
    let p = head;
    while(p.next){
        p = p.next;
    }
    reverse(cur,next);
    cur.next = null;
    return p;
};

function reverse(cur,curNext){
    if(curNext.next!=null){
        reverse(curNext,curNext.next);
    }
    curNext.next = cur;
    
}


console.log(reverseList(node1));