/* Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms, you are allowed to use the split() method. */



function longestWord(st) {
    let arr = st.split(' ')
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i].length){
            max=arr[i].length
        }
        
    }
    return max
}
string = 'The quick brown fox jumped over the lazy dog';
console.log(longestWord(string));