// 1 Print 1 - 135 Write a program using JavaScript that will print all the numbers from 1 to 135.

for (let i = 1; i <= 135; i++) {
  console.log(i);
}

// 2. Print Odd Numbers 1 - 135 Write a program using JavaScript that will print all the odd numbers from 1 to 135.

for (let i = 1; i < 135; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 3. Sum of Printed Numbers, Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.

let sum1 = 0;
for (let i = 1; i <= 135; i++) {
  sum = sum + i;
  console.log(`The current number is ${i} The sum is ${sum}`);
}

// 4. Print the elements of an array, Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

const arrayX = [1, 4, 2, 12];

for (let i = 0; i < arrayX.length; i++) {
  console.log(arrayX[i]);
}
//5. Find Max, Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

const findMax = [2, -3, -1, 5, 12, 200, -100, 23, 53];
let maxValue = findMax[0];
for (let i = 0; i < findMax.length; i++) {
  if (findMax[i] > maxValue) {
    maxValue = findMax[i];
  }
}
console.log(maxValue);

//6. Get Average, Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

const X = [2, 1, 3];
sum = 0;
average = 0;
for (let i = 0; i < X.length; i++) {
  sum = sum + X[i];
}
average = sum / X.length;
console.log(average);

// 7. Eliminate the Negatives, Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0]

const noNegative = [2, -1, 4, -3];
let sum = 0;

for (let i = 0; i < noNegative.length; i++) {
  if (noNegative[i] < 0) {
    noNegative[i] = 0;
  }
}
console.log(noNegative);

// 8. Number to String, Write a program that takes an array of numbers and turns the negative values into strings.

X = [2, -3, -1, 5, 12, 200, -100, 23, 53];
for (let i = 0; i < X.length; i++) {
  if (X[i] < 0) {
    X[i] = "Turing";
  }
}

console.log(X);

