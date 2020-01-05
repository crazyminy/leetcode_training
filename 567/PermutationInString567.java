import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class PermutationInString567 {
	public static void main(String[] args) {
		PermutationInString567 solu = new PermutationInString567();
		System.out.println(solu.checkInclusion("rmqqh","nrsqrqhrymf"));
	}
	
	public boolean checkInclusion(String s1, String s2) {
		List<Queue<Integer>> record = new ArrayList<Queue<Integer>>();
		for(int i = 0;i<26;i++) {
			record.add(new LinkedList<Integer>());
		}
		boolean res = false;
		int len = s1.length();
		int left = len;
		int[] map = new int[26];
		for(int i = 0;i<len;i++) {
			map[s1.charAt(i)-'a']++;
		}
		int len2 = s2.length();
		int leftP = 0;
		int rightP = 0;
		for(;rightP<len2;rightP++) {
			int ch = s2.charAt(rightP)-'a';
			
			if(map[ch]>0) {
				record.get(ch).offer(rightP);
				map[ch]--;
				left--;
			}else if(record.get(ch).size()>0) {
				//左指针移到目标处
				int index = record.get(ch).poll()+1;
				moveLeft(map,record,index,leftP,s2);
				record.get(ch).offer(rightP);
				leftP = index;
				left = len -(rightP-leftP+1);
			}else {
				//左指针移到右
				
				left = len;
				moveLeft(map, record, rightP, leftP, s2);
				leftP = rightP;
			}
			
			
			if(left == 0) {
				res = true;
				break;
			}
		}
		return res;
    }
	
	private void moveLeft(int[] map,List<Queue<Integer>> record,int target,int from,String str) {
		for(int i = from;i<target;i++) {
			int ch = str.charAt(i)-'a';
			if(record.get(ch).poll()!=null) {
				map[ch]++;
			}
		}
	}
}
