package WeeklyContest172;

import java.util.ArrayList;
import java.util.List;

public class Solution4 {
    public int minTaps(int n, int[] ranges) {
        List<Range> list = new ArrayList<Range>();
        for (int i = 0;i<ranges.length;i++) {
            int range = ranges[i];
            list.add(new Range(i-range,i+range));
        }
        list.sort((r1,r2)->{ return r1.left-r2.left; });
        return 0;
    }
}

class Range{
    int left;
    int right;
    Range(int left,int right){
        this.left = left;
        this.right = right;
    }
}
