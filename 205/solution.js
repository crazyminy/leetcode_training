/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let res = true;
    let set = new Set();
    let map = {};
    for(let i = 0;i<s.length;i++){
        let key = s.charAt(i);
        let value = t.charAt(i);

        
        if(key in map){
            if(map[key] !== value){
                res = false;
                break;
            }
        }else{
            if(set.has(value)){
            res = false;
            break;    
            }
            map[key] = value;
            set.add(value);
        }
    }
    return res;
};
isIsomorphic("ab","aa");