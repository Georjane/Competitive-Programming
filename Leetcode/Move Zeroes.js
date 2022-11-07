  let count = 0;
  for (let i = 0; i < nums.length; i+=1) {
    if (nums[i] == 0) {
      nums.splice(i, 1)
      count +=1
      i -= 1
    }
  }
  for (let j = 0; j < count; j++) {
    nums.push(0)    
  }
