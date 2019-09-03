/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val){
    this.val = val;
    this.next = null;
}

let n1,n2,n3,n4,n5,n6;

n1 = new ListNode(2);
n2 = new ListNode(4);
n3 = new ListNode(3);
n4 = new ListNode(5);
n5 = new ListNode(6);
n6 = new ListNode(4);

n1.next = n2;
n2.next = n3;

n4.next = n5;
n5.next = n6;

var addTwoNumbers = function(l1, l2) {

    let root = new ListNode(0);
    let p = root;

    let p1 = l1;
    let p2 = l2;

    let m = 0;
    while(p1!=null || p2!=null){
        
        let val1 = p1==null?0:p1.val;
        let val2 = p2==null?0:p2.val;

        p1 = p1==null?null:p1.next;
        p2 = p2==null?null:p2.next;


        let temp = val1+val2+m;
        if(temp>=10){
            m = 1;
            temp = temp -10;
        }else{
            m=0;
        }
        
        p.next = new ListNode(temp);
        p = p.next;
    }

    if(m==1){
        p.next = new ListNode(1);
    }

    /* while(root!=null){
        console.log(root.val);
        root = root.next;
    } */

    return root.next;
};

addTwoNumbers(n1,n4);