package weeklyContest166;

public class Solution3 {
	public static void main(String[] args) {
		int[] nums = {12,50,11,75,57,12,73,4,69,78};
		int threshold = 649;
		Solution3 s = new Solution3();
		System.out.println(s.smallestDivisor(nums, threshold));
	}
	public int smallestDivisor(int[] nums, int threshold) {
		int sum = 0;
		int res = 1;
		for (int i = 0; i < nums.length; i++) {
			sum+=nums[i];
		}
		
		res = sum / threshold;
		
		if(res == 0) {
			res++;
		}
		while(true) {
			sum = 0;
			for (int i = 0; i < nums.length; i++) {
				int temp = (int) Math.ceil((Double.valueOf(Integer.toString(nums[i]))/res));
				sum+=temp;
			}
			if(sum>threshold) {
				res++;
			
			}else {
				break;
			}
		}
		return res;
    }
}
