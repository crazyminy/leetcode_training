public class Solution204 {
	
	public static void main(String[] args) {
		Solution204 solution204 = new Solution204();
		System.out.println(solution204.countPrimes(2));
	}
	
	public int countPrimes(int n) {
		boolean[] arr = new boolean[n];
		int threshold = (int)Math.ceil(Math.sqrt(n));
		for(int i = 2;i<threshold;i++) {
			if(!arr[i]) {
				//是素数
				for(int j = i*i;j<n;j+=i) {
					arr[j] = true;
				}
			}
		}
		int sum = 0;
		for(int i = 2;i<n;i++) {
			if(!arr[i]) {
				sum++;
			}
		}
		return sum;
    }
}