package WeeklyContest172;

import java.util.ArrayList;
import java.util.List;

/*
*
* 给你一个字符串 s。请你按照单词在 s 中的出现顺序将它们全部竖直返回。
单词应该以字符串列表的形式返回，必要时用空格补位，但输出尾部的空格需要删除（不允许尾随空格）。
每个单词只能放在一列上，每一列中也只能有一个单词。

 

示例 1：

输入：s = "HOW ARE YOU"
输出：["HAY","ORO","WEU"]
解释：每个单词都应该竖直打印。
 "HAY"
 "ORO"
 "WEU"
示例 2：

输入：s = "TO BE OR NOT TO BE"
输出：["TBONTB","OEROOE","   T"]
解释：题目允许使用空格补位，但不允许输出末尾出现空格。
"TBONTB"
"OEROOE"
"   T"
示例 3：

输入：s = "CONTEST IS COMING"
输出：["CIC","OSO","N M","T I","E N","S G","T"]
 

提示：

1 <= s.length <= 200
s 仅含大写英文字母。
题目数据保证两个单词之间只有一个空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/print-words-vertically
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

public class Solution2 {
    public static void main(String[] args) {
        String str = "how are youi";
        System.out.println(new Solution2().printVertically(str));
    }

    public List<String> printVertically(String s) {
        String[] words = s.split(" ");
        List<String> res = new ArrayList<String>();
        int maxLength = 0;
        for (String word:words) {
            if(word.length()>maxLength){
                maxLength = word.length();
            }
        }
        //获得最大的长度
        for(int i = 0;i<maxLength;i++){
            String str = "";
            for (String word:words) {
                if(word.length()<=i){
                    str+=" ";
                }else{
                    if(word.length()-1 == i){
                        str+=word.substring(i);
                    }else{
                        str+=word.substring(i,i+1);
                    }

                }
            }
            str = myTrim(str);
            res.add(str);
        }
        return res;
    }

    String myTrim(String str){
        int len = str.length();
        int numOfEmptyInTail = 0;
        for(int i = len-1;i>=0;i--){
            if(str.charAt(i) == ' '){
                numOfEmptyInTail++;
            }else{
                break;
            }
        }
        return str.substring(0,len-numOfEmptyInTail);
    }
}
