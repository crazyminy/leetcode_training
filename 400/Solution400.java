/*
* 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/nth-digit
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
public class Solution400 {
    public static void main(String[] args) {
        Solution400 solu = new Solution400();

        System.out.println(solu.findNthDigit(189)+":"+solu.findNthDigit1(189));
        System.out.println(solu.findNthDigit(456)+":"+solu.findNthDigit1(456));
        System.out.println(solu.findNthDigit(234245)+":"+solu.findNthDigit1(234245));
        System.out.println(solu.findNthDigit(56346543)+":"+solu.findNthDigit1(56346543));
        System.out.println(solu.findNthDigit(1000000000)+":"+solu.findNthDigit1(1000000000));
    }

    public int findNthDigit(int n) {
        //个位数 1-9       9
        //十位数 10 - 99   90*2
        //百位数 100 999   900*3
        //策略 先确定是几位数
        int target_len = 1;
        int lastSum = 0;
        int sum = 9;
        while (target_len <= 10) {
            if (n <= sum) {
                //就找到了目标位数
                break;
            }
            target_len++;
            lastSum = sum;
            if (target_len == 11) {
                break;
            }
            sum += 9 * (int) Math.pow(10, target_len - 1) * target_len;
        }

        int chazhi = n - lastSum;
        int index = (int) Math.ceil((double) chazhi / target_len);
        int yu = chazhi % target_len;
        int targetNum = (int) Math.pow(10, target_len - 1) + index - 1;
        String targetStr = Integer.toString(targetNum);
        int res;
        if (yu == 0) {
            yu = target_len;
        }
        yu--;
        res = Integer.valueOf(targetStr.charAt(yu) - '0');
        return res;
    }


    public int findNthDigit1(int n) {

        //总位数
        int sum_th = 0;
        //数字位数 一位 两位 三位
        int i = 1;
        //当前数值
        int k = 0;
        while (sum_th < n) {
            //防止溢出
            if (sum_th + i * 9 * Math.pow(10, i - 1) >= n) {
                break;
            }
            k += 9 * Math.pow(10, i - 1);
            sum_th += i * 9 * Math.pow(10, i - 1);
            i++;
        }
//        此处这样写会溢出 下面代码附带检测 (当n = 1000000000)
//        i--;
//        int d = (int)(i*9*Math.pow(10,i-1));
//        long d2 = (long) (i*9*Math.pow(10,i-1));
//        sum_th -= d;
//        k -= 9*Math.pow(10,i-1);

        //剩余数字个数
        int temp = (n - sum_th) / i;
        int mod = (n - sum_th) % i;
        k += temp;
        if (mod == 0) {
            return k % 10;
        } else {
            k++;
            return String.valueOf(k).charAt(mod - 1) - '0';
        }
    }
}
