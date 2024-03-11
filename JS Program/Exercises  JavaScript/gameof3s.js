/* Challenge Description
The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.
 */

function Gameof3s(num) {
  while (num > 1) {
    if (num % 3 == 0) {
      console.log(num);
    } else if (num % 3 == 1) {
      console.log(num, "-1");
      num -= 1;
      num = Math.floor(num / 3);
    } else num % 3 == 2;
    console.log(num, "+2");
    num += 2;
    num = Math.floor(num / 3);
  }
  return num;
}
console.log(Gameof3s(100));
