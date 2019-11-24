/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    for(let i = 0;i<points.length-1;i++){
        let point1 = points[i];
        let point2 = points[i+1];

        let disX = Math.abs(point1[0]-point2[0]);
        let disY = Math.abs(point1[1]-point2[1]);

        let time = Math.max(disX,disY);
        res+=time;
    }
    return res;
};


console.log(minTimeToVisitAllPoints( [[3,2],[-2,2]]));