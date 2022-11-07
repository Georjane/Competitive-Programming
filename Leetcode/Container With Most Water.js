var maxArea = function(height) {
    let  n = height.length-1
    let  i = 0
    let area = 0
    let temparea
    while (i<n) {
        temparea = Math.min(height[n],height[i]) * (n-i)
        if (temparea > area) {
            area = temparea;
        }
        if (height[i] < height[n]){
            i++
        }
        else {
            n--
        }
    }
    return area 
};
