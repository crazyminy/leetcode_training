package weeklyContest166;

import java.util.ArrayList;
import java.util.List;

public class Solution1 {
	public static void main(String[] args) {
		Solution1 s = new Solution1();
		s.subtractProductAndSum(5434);
	}
	
	public int subtractProductAndSum(int n) {
        List<Integer> list = new ArrayList<Integer>();
        while(n>0) {
        	list.add(n%10);
        	n = n/10;
        }
        int sum = 0;
        int mul = 1;
        for (Integer integer : list) {
			sum+=integer;
			mul*=integer;
		}
        return mul-sum;
    }
}
