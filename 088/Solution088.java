public class Solution088{
    public void merge(int[] nums1, int m, int[] nums2, int n) {
		if(m == 0) {
			for(int i = 0;i<n;i++) {
				nums1[i] = nums2[i];
			}
		}else if(n!=0) {
			int p2 = n-1;
	        int p1 = m-1;
	        int toWrite = n+m-1;
	        do{
	            if(nums1[p1]>nums2[p2]){
	                nums1[toWrite] = nums1[p1];
	                p1--;
	            }else{
	                nums1[toWrite] = nums2[p2];
	                p2--;
	            }
	            toWrite--;
	        }while(p2 != -1&& p1 != -1);
	        if(p1 == -1) {
	        	for(int i = 0;i<=p2;i++) {
					nums1[i] = nums2[i];
				}
	        }
		}
		
    }
}