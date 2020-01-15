import java.util.Stack;

public class Solution155 {

}

class MinStack {
	
	private Stack<Integer> self;
	private Stack<Integer> helper;

    /** initialize your data structure here. */
    public MinStack() {
        this.self = new Stack<Integer>();
        this.helper = new Stack<Integer>();
    }
    
    public void push(int x) {
        self.push(x);
        if(helper.isEmpty()) {
        	helper.push(x);
        }else if(helper.peek()<x){
        	helper.push(helper.peek());
        }else {
        	helper.push(x);
        }
    }
    
    public void pop() {
        self.pop();
        helper.pop();
    }
    
    public int top() {
        return self.peek();
    }
    
    public int getMin() {
        return helper.peek();
    }
}