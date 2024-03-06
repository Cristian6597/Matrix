/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.

For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

For this algorithm, you can use the split() method.
 */

let string = "sHorT AnD sToUt";
string.toUpperCase();
function TitleCase(st) {
  let arr = st.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log(TitleCase(string));
