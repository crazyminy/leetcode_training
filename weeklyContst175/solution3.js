
var TweetCounts = function() {
    this.dataSet = {};
};



/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if(this.dataSet[tweetName] === undefined){
        this.dataSet[tweetName] = [time];
    }else{
        this.dataSet[tweetName].push(time);
    }
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
    let delta = 3600;
    if(freq == "minute"){
        delta = 60;
    }else if(freq == "day"){
        delta = 86400;
    }
    

    if(this.dataSet[tweetName] === undefined){
        let res = [];
        let st = startTime;
        let ed = startTime+delta;
        while(ed<=endTime){
            res.push(0);
            st = ed;
            ed+=delta;
        }
        if(st<=endTime){
            res.push(0);
        }
        
        return res;
    }
    //确有其人
    this.dataSet[tweetName].sort();
    let arr = this.dataSet[tweetName];
    let res = [];
    let st = startTime;
    let ed = startTime+delta;
    let count = 0;
    let index = 0;
    while(ed<=endTime){
        count = 0;
        for(;index<arr.length;index++){
            if(arr[index]<st){
                continue;
            }else if(arr[index]>=ed){
                break;
            }else{
                count++;
            }
        }
        res.push(count);
        st = ed;
        ed+=delta; 
    }
    count = 0;
    if(st<=endTime){
        for(;index<arr.length;index++){
            if(arr[index]<st){
                continue;
            }else if(arr[index]>=ed){
                break;
            }else{
                count++;
            }
        }
        res.push(count)
    }
    return res;
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */

let tweetCounts = new TweetCounts();
tweetCounts.recordTweet("tweet3", 0);
tweetCounts.recordTweet("tweet3", 60);
tweetCounts.recordTweet("tweet3", 10);                             // "tweet3" 发布推文的时间分别是 0, 10 和 60 。
console.log(tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59)); // 返回 [2]。统计频率是每分钟（60 秒），因此只有一个有效时间间隔 [0,60> - > 2 条推文。
console.log(tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60)); // 返回 [2,1]。统计频率是每分钟（60 秒），因此有两个有效时间间隔 1) [0,60> - > 2 条推文，和 2) [60,61> - > 1 条推文。 
tweetCounts.recordTweet("tweet3", 120);                            // "tweet3" 发布推文的时间分别是 0, 10, 60 和 120 。
console.log(tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 210));  // 返回 [4]。统计频率是每小时（3600 秒），因此只有一个有效时间间隔 [0,211> - > 4 条推文。