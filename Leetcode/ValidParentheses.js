var isValid = function(s) {
    let arr = []
    if(s.length % 2 != 0){
            return false
        }
    else {
        for(let i=0; i<s.length;i++){
             if((arr[arr.length-1] ==='(' && s[i]===')')||(arr[arr.length-1] ==='{' && s[i]==='}') || (arr[arr.length-1] ==='[' && s[i]===']')) {
              arr.pop();
             }
             else {
                 arr.push(s[i])
             }
        }
    }
    return !arr.length
};
