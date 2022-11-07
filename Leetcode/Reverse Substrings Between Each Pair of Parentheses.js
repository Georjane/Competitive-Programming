var reverseParentheses = function(s) {
       let arr=[]
   let n = s.length
   for(let i = 0; i<n ; i++){
      if(s[i]!==')'){
          arr.push(s[i])
      }
      else{
          let temp = [];
          while(arr[arr.length -1]!=='('){
                temp.push(arr.pop());
            }
          arr.pop()
          arr.push(...temp)
      }
   }
    return arr.join('')
};
