function sumArr(arr){
    let sum = 0
    for (let i=Math.min(...arr) ; i<=Math.max(...arr); i++) {
      sum+=i
        
    }
    return sum
}
let arr = [10,5]
console.log(sumArr(arr));