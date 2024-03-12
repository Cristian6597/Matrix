/* Tuesday: Magic Squares
A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

<code>
8 1 6
3 5 7
4 9 2
</code>.
The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true. */

let arr = [8,1,6,
           3,5,7,
           4,9,3]


let dia1 = arr[0] + arr[4] + arr[8]
let dia2 = arr[2] + arr[4] + arr[6]

if(dia1==dia2){
    console.log(ture);
}else{
    console.log(false);
}