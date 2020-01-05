import java.util.Stack;

public class Solution020{
    public static void main(String[] args) {
        String str = "()[]{}";
        Solution020 solu = new Solution020();
        System.out.println(solu.isValid(str));
    }

    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0;i<s.length();i++){
            char ch = s.charAt(i);
            switch(ch){
                case '(':
                case '[':
                case '{':
                    stack.add(ch);
                    break;
                case ')':
                	if(stack.isEmpty()) {
                		return false;
                	}
                    char last = stack.pop();
                    if(ch-last != 1){
                        return false;
                    }
                    break;
                default:
                	if(stack.isEmpty()) {
                		return false;
                	}
                    if(ch-stack.pop() != 2){
                        return false;
                    }
                    break;
            }
        }
        return stack.isEmpty();
    }

}