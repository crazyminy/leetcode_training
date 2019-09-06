/* Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let result = [];//结果数组

  let need = [];
  let ascii_a = "a".charCodeAt(0);
  for(let i = 0;i<26;i++){
    need.push(0);
  }
  for(let i = 0;i<p.length;i++){
    let index = p.charCodeAt(i)-ascii_a;
    need[index]++;
  }

  //开始拓展滑动窗口

  let start = 0;
  let end = 0;
  let rest = p.length;

  for(end;end<p.length;end++){
    let ascii_ch = s.charCodeAt(end);
    need[ascii_ch-ascii_a]--;
    if(need[ascii_ch-ascii_a]>=0){
      rest --;
    }
  }

  if(rest === 0){
    result.push(start);
  }
  while(end<s.length){
    let ascii_start = s.charCodeAt(start);
    if(need[ascii_start-ascii_a]>=0){
      rest++;
    }
    need[ascii_start-ascii_a]++;
    start++;
    
    
    let ascii_end = s.charCodeAt(end);
    need[ascii_end-ascii_a]--;
    if(need[ascii_end-ascii_a]>=0){
      rest--;
    }

    if(rest === 0){
      result.push(start);
    }

    end++;
  }
  return result;
};

console.log(findAnagrams("cbaebabacd","abc"));