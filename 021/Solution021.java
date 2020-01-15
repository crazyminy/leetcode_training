class ListNode {
      int val;
      ListNode next;
      ListNode(int x) { val = x; }
  }
 

public class Solution021 {
	public static void main(String[] args) {
		
	}
	
	
	
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    	//return recursive(l1, l2);
    	return iterate(l1, l2);
    }
    
    
    //递归
    public ListNode recursive(ListNode l1,ListNode l2) {
    	if(l1 == null) {
    		return l2;
    	}
    	if(l2 == null) {
    		return l1;
    	}
    	if(l1.val<=l2.val) {
    		l1.next = recursive(l1.next, l2);
    		return l1;
    	}else {
    		l2.next = recursive(l1, l2.next);
    		return l2;
    	}
    }
    
    //迭代
    public ListNode iterate(ListNode l1,ListNode l2) {
    	ListNode beforeHeader = new ListNode(-1);
    	ListNode prev = beforeHeader;
    	while(l1 != null && l2!=null) {
    		if(l1.val<=l2.val) {
    			prev.next = l1;
    			l1 = l1.next;
    			prev = prev.next;
    		}else {
    			prev.next = l2;
    			l2 = l2.next;
    			prev = prev.next;
    		}
    	}
    	
    	if(l1 == null) {
    		prev.next = l2;
    	}else {
			prev.next = l1;
		}
    	return beforeHeader.next;
    }
	
}
