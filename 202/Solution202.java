import java.util.*;

/*
* 编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
public class Solution202 {

    public static void main(String[] args) {
        Solution202 solu = new Solution202();
        System.out.println(solu.isHappy(1009));
    }

    public boolean isHappy(int n) {
        boolean res = false;
        Set<String> set = new HashSet<String>();
        set.add(Integer.toString(n));
        while(true){
            int sum = getPowSum(n);
            System.out.println(sum);
            if(sum==1){
                res = true;
                break;
            }
            String str_new = getSortedString(sum);
            if(set.contains(str_new)){
                break;
            }else{
                set.add(str_new);
            }
            n = sum;
        }
        return res;
    }

    public String getSortedString(int num){
        String str = Integer.toString(num);
        String[] arr = str.split("");
        List<String> list = Arrays.asList(arr);
        list.sort((a,b)->a.charAt(0)-b.charAt(0));
        list.toArray(arr);
        return String.join("",arr);
    }

    public int getPowSum(int num){
        int sum = 0;
        while(num!=0){
            int temp = num%10;
            sum+=temp*temp;
            num = num/10;
        }
        return sum;
    }
}
