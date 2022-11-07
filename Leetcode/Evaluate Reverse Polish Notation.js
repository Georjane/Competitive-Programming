
var evalRPN = function(tokens) {
    let arr = []
    let n = tokens.length
    let right;
    let left;
    for(let i = 0 ; i < n; i++){
            if(tokens[i]=="+"){
                arr.push(Number(arr.pop()) + Number(arr.pop()))  
            }
            else if (tokens[i]=="/"){
                 right = arr.pop()
                 left = arr.pop()
                 arr.push((Number(left) / Number(right)) | 0) 
            }
            else if (tokens[i]=="*"){
                 arr.push(Number(arr.pop()) * Number(arr.pop())) 
            }
            else if (tokens[i]=="-"){
                 right = arr.pop()
                 left = arr.pop()
                 arr.push(Number(left) - Number(right)) 
            }
            else {
                 arr.push(tokens[i])
            }
        }
    return Number(arr)
    
};
