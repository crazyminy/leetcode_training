
import java.util.HashMap;
import java.util.Map;

public class Solution13 {
	
	private static Map<Character, Integer> map = new HashMap<Character, Integer>();
	
	private static Map<String,Integer> exMap = new HashMap<String, Integer>();
	
	static {
		map.put('I', 1);
		map.put('V', 5);
		map.put('X', 10);
		map.put('L', 50);
		map.put('C', 100);
		map.put('D', 500);
		map.put('M', 1000);
		
		exMap.put("IV", 4);
		exMap.put("IX", 9);
		exMap.put("XL", 40);
		exMap.put("XC", 90);
		exMap.put("CD", 400);
		exMap.put("CM", 900);
		exMap.put("II",2);
		exMap.put("III",3);

	}
	
	public static void main(String[] args) {
		Solution13 solution13 = new Solution13();
		System.out.println(solution13.romanToInt("MCMXCVI"));
	}
	
	public int romanToInt(String s) {
		int sum = 0;
		StringBuilder sb = new StringBuilder(s);
		for(Map.Entry<String, Integer> entry : exMap.entrySet()) {
			String match = entry.getKey();
			int len = match.length();
			int value = entry.getValue();
			int times = 0;
			while (true) {
				int index = sb.lastIndexOf(match);
				if(index<0) {
					break;
				}else {
					sb.delete(index, index+len);
					//sb.setLength(sb.l-len);
					System.out.println(sb.toString());
					times++;
				}
			}
			sum+=value*times;
		}
		for(int i = 0;i<sb.length();i++) {
			char curCh = sb.charAt(i);
			sum+= map.get(curCh);
		}
		return sum;
    }
}
