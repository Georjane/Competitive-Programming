function countSwaps(a) {
    let count = 0
      for (let i = 0; i < a.length; i++) {
        if(a[i + 1] < a[i]){
            let x = a[i]
            a[i] = a[i+1]
            a[i+1] = x
            count += 1
              for (let j = i - 1; j >= 0; j--) {
                  if( i!= 0 && a[j + 1] < a[j]){
                    let y = a[j]
                    a[j] = a[j+1]
                    a[j+1] = y
                    count += 1
                  }
              }
        }    
      }
      console.log('Array is sorted in', count, 'swaps.')
      console.log('First Element:', a[0])
      console.log('Last Element:', a[a.length-1])
}
