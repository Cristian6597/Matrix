const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
function thirdHighest(input) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < arr.length; i++) {
    if (input[i] > first) {
      third = second;
      second = first;
      first = input[i];
    } else if (input[i] > second) {
      third = second;
      second = input[i];
    } else if (input[i] > third) {
        third = input[i];
    }
  }
  return third;
}

console.log(thirdHighest(arr));
