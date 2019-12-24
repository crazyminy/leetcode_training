package weeklyContest166;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution2 {
	public static void main(String[] args) {
		Solution2 solution2 = new Solution2();
	}
	
	public List<List<Integer>> groupThePeople(int[] groupSizes) {
		List<List<Integer>> res = new ArrayList<List<Integer>>();
		Map<Integer, Node> map = new HashMap<Integer, Node>();
		for (int i = 0; i < groupSizes.length; i++) {
			if(map.containsKey(groupSizes[i])) {
				Node node = map.get(groupSizes[i]);
				res.get(node.getIndex()).add(i);
				node.setLeftSpace(node.getLeftSpace()-1);
				if(node.getLeftSpace() == 0) {
					map.remove(groupSizes[i]);
				}
			}else {
				List<Integer> list_new = new ArrayList<Integer>();
				list_new.add(i);
				int len = res.size();
				res.add(list_new);
				Node node = new Node(groupSizes[i]-1, len);
				if(node.getLeftSpace()!=0) {
					map.put(groupSizes[i], node);
				}
			}
		}
		return res;
    }
}

class Node{
	private int leftSpace;
	private int index;
	public int getLeftSpace() {
		return leftSpace;
	}
	public void setLeftSpace(int leftSpace) {
		this.leftSpace = leftSpace;
	}
	public int getIndex() {
		return index;
	}
	public void setIndex(int index) {
		this.index = index;
	}
	public Node(int leftSpace, int index) {
		super();
		this.leftSpace = leftSpace;
		this.index = index;
	}
	
}
