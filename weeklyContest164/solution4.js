/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    let res = {answser:0};
    dfs(steps,0,arrLen,res);
    return res.answser;
};

function dfs(leftSteps,curIndex,arrLen,res){
    if(leftSteps === 0){
        if(curIndex===0){
            res.answser++;
            if(res.answser>1000000007){
                res.answser = res.answser-1000000007;
            }
        }
    }else if(curIndex>leftSteps){
        return;
    }else if(curIndex===leftSteps){
        res.answser++;
        if(res.answser>1000000007){
            res.answser = res.answser-1000000007;
        }
        return;
    }else{
        if(curIndex!==0){
            //left
            dfs(leftSteps-1,curIndex-1,arrLen,res);
        }

        dfs(leftSteps-1,curIndex,arrLen,res);

        if(curIndex<arrLen-1){
            //right
            dfs(leftSteps-1,curIndex+1,arrLen,res);
        }
    }
    
}

console.log(numWays(27,7));