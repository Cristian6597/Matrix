/* Friday: Fibonacci Sequence
A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence. */

function fib(num) {
    let seq = 1
    let seq1 = 0
    let seq2 = 0
    for (let i = 2; i <= num; i++) {
        seq2=seq1
        seq1=seq
        seq=seq1+seq2
        
    }
    return seq
}

console.log(fib(4));