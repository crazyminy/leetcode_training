import java.util.*;

/*
* 给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 :

 



 

返回其前序遍历: [1,3,5,6,2,4]。

 

说明: 递归法很简单，你可以使用迭代法完成此题吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
public class Solution589 {
    class Node {
        public int val;
        public List<Node> children;

        public Node() {}

        public Node(int _val) {
            val = _val;
        }

        public Node(int _val, List<Node> _children) {
            val = _val;
            children = _children;
        }
    }

    public List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<Integer>();
        //recursion(root,res);
        iterator(root,res);
        return res;
    }

    public void recursion(Node root,List<Integer> res){
        if(root!=null){
            res.add(root.val);
            if(root.children!=null){
                for(Node node : root.children){
                    recursion(node,res);
                }
            }
        }
    }

    public void iterator(Node root,List<Integer> res){
        Stack<Node> stack = new Stack<>();
        stack.add(root);
        while (!stack.isEmpty()){
            Node node = stack.pop();
            res.add(node.val);
            if(node.children!=null){
                for(int i = node.children.size()-1;i>=0;i--){
                    stack.add(node.children.get(i));
                }
            }
        }
    }
}
