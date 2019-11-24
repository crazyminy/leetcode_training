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

let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
p1.next = p2;
p2.next = p3;
p3.next = p4;
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let arr = [];
  let p = head;
  let res = new ListNode(undefined);
  while(p){
      arr.push(p);
      p = p.next;
  }  
  p = res;
  while(arr.length>=2){
    p.next = arr.shift();
    p = p.next;
    p.next = arr.pop();
    p = p.next;
  }
  if(arr.length>0){
      p.next = arr.shift();
  }
  console.log(res)
  return res.next;
};

reorderList(p1);