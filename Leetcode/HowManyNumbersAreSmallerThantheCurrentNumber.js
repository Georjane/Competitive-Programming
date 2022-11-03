var smallerNumbersThanCurrent = function(nums) {
    let res = {}
    let unSorted = [...nums]
    let i = 0
    
    nums.sort(function(a, b){return a - b})
    unSorted.forEach(n => {
           res[i] = nums.indexOf(n)
        i = i + 1
    });
    return Object.values(res)
};
