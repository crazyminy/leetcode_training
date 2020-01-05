package leetcode_common;

import java.util.ArrayList;
import java.util.List;

public class Solution628 {
	
	
	public static void main(String[] args) {
		Solution628 solu = new Solution628();
		int[] nums = new int[] {-10,-2,-5,-3,1,3,4,5,6,7,0,10};
		System.out.println(solu.maximumProduct(nums));
	}
	
	public int maximumProduct(int[] nums) {
		if(nums.length==3) {
			return nums[0]*nums[1]*nums[2];
		}
		
		boolean has0 = false;
		List<Integer> negativeList = new ArrayList<Integer>();
		List<Integer> positiveList = new ArrayList<Integer>();
		
		for(int i = 0;i<nums.length;i++) {
			int val = nums[i];
			if(val>0) {
				if(positiveList.size()<3) {
					positiveList.add(val);
					positiveList.sort((a,b)->(b-a));	
				}else if(val>positiveList.get(2)) {
					positiveList.add(val);
					positiveList.sort((a,b)->(b-a));
					positiveList.remove(3);
				}
			}else if(val<0) {
				if(negativeList.size()<2) {
					negativeList.add(val);
					negativeList.sort((a,b)->(a-b));
				}else if(val<negativeList.get(1)) {
					negativeList.add(val);
					negativeList.sort((a,b)->(a-b));
					negativeList.remove(2);
				}
			}else {
				has0 = true;
			}
		}
		List<Integer> res = new ArrayList<Integer>();
		if(has0) res.add(0);
		//1
		if(positiveList.size()==3) {
			res.add(positiveList.get(0)*positiveList.get(1)*positiveList.get(2));
		}
		
		if(negativeList.size()==2 && positiveList.size()>=1) {
			res.add(negativeList.get(0)*negativeList.get(1)*positiveList.get(0));
		}
		
		res.sort((a,b)->b-a);
		return res.get(0);
    }
	
}


