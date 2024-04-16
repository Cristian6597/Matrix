//Write a program that will add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. For this algorithm, write the pseudocode, before your JS code.

let sum = 0;

for (let i = 200; i <= 2700; i++) {
  if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)) {
    sum += i;
  }
}
console.log(sum);

//Define a function rFib(num) that takes a positive integer as an input. Returns the Nth Fibonacci number, with n=1 representing the start of the sequence. Solve this recursively. For this algorithm, write the pseudocode, before your JS code.

function rFib(num) {
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

console.log(rFib(12));

//Given an array of integers IntAtt, for example, IntArr = [2,7,1,-2], implement a function to sort this array in ascending order (from lowest to largest) using the Bubble Sort method. For this algorithm, write the pseudocode, before your JS code.

function bubbleSort(IntArr) {
    const n = IntArr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (IntArr[i] > IntArr[i + 1]) {
                const temp = IntArr[i];
                IntArr[i] = IntArr[i + 1];
                IntArr[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return IntArr;
}
const IntArr = [2, 7, 1, -2];
console.log(bubbleSort(IntArr));


// Declare a function isPalindrome(str) that takes a string as an input. Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. For this algorithm, build the complete T diagram for the word ‘kayak’.

function checkPalindrome(name) {
    let reversedName = name.split('').reverse().join('');
    if (reversedName === name) {
        console.log('Palindrome');
    } else {
        console.log('Non palindrome');
    }
}

let name = prompt('Insert word:');
checkPalindrome(name);


//Declare a function removeNegative(arr) that takes an array as an input. Given an array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1]. For this algorithm, build the complete T diagram for the array [1,-2,3].

let x = [1, -2, 4, 1];
for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    x.splice(i, 1);
  }
}
console.log(x);
