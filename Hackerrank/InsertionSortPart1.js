function insertionSort1(n, arr) {
    let x = arr[n-1]
      for (let i = n - 2; i >= -1; i--) {
          if(x < arr[i]){
              arr[i + 1] = arr[i]
              console.log(...arr)
          } else {
              arr[i+1] = x
              console.log(...arr)  
              return
          }
    }
}
