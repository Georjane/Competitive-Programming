var sortSentence = function(s) {
    let arr = {}
    let res = []
    s.split(' ').forEach(s=>{
        arr[s.slice(-1)] = s.slice(0, -1);
    })
    let arr1 = Object.keys(arr).sort(function(a, b){return a - b})
    arr1.forEach(s=>{
        res.push[s]
    })
    return Object.values(arr).join(" ")
};
