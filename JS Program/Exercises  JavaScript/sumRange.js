/* Thursday: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. */

function sumArr(arr){
    let sum = 0
    for (let i=Math.min(...arr) ; i<=Math.max(...arr); i++) {
      sum+=i
        
    }
    return sum
}
let arr = [10,5]
console.log(sumArr(arr));