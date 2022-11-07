var compress = function(chars) {
       let i = 0
       let j = 0
       let n = chars.length
       let count
        while (j < n){
            chars[i] = chars[j]
            count = 1
            while ( j + 1 < n && chars[j] == chars[j+1]) {
                j ++
                count ++
            }
            if (count > 1) {
                for (let c of String(count)) { 
                    chars[i+1]=c
                    i++
                }
            }
			i++
            j++
        }
        return i
};
