
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*347 前K个高频元素*/
public class Solution347 {
	
	public static void main(String[] args) {
		int[] nums = new int[] {1,1,1,2,2,2,3};
		int k = 2;
		Solution347 solu = new Solution347();
		List<Integer> list = solu.topKFrequent(nums, k);
		System.out.println(list);
	}
	
	public List<Integer> topKFrequent(int[] nums, int k) {
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		for (int num : nums) {
			if(map.containsKey(num)) {
				map.put(num, map.get(num)+1);
			}else {
				map.put(num,1);
			}
		}
		List<Node> list = new ArrayList<Node>();
		for (Map.Entry<Integer, Integer> entry:map.entrySet()) {
			list.add(new Node(entry.getKey(), entry.getValue()));
		}
		list.sort((Node node2,Node node1)->{return node1.getValue()-node2.getValue();});
		List<Integer> res = new ArrayList<Integer>();
		for(int i = 0;i<k;i++) {
			res.add(list.get(i).getKey());
		}
		return res;
    }
}

class Node{
	private Integer key;
	private Integer value;
	public Integer getKey() {
		return key;
	}
	public void setKey(Integer key) {
		this.key = key;
	}
	public Integer getValue() {
		return value;
	}
	public void setValue(Integer value) {
		this.value = value;
	}
	public Node(Integer key, Integer value) {
		super();
		this.key = key;
		this.value = value;
	}
	
	
		
	
}