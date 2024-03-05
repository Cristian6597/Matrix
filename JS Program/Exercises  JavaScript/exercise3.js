//Exercise 1 The following function returns true if the parameter age is greater than 18. Otherwise, it asks for a confirmation and returns its result.
let ageRequest = prompt("age?");
let age = parseFloat(ageRequest);
let ageCheck = () => {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
};

console.log(ageCheck());

// Exercise 2 Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
let result = 1;
let pow = (x, n) => {
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

console.log(pow(3, 4));

//Exercise 3 Replace Function Expressions with arrow functions in the code:

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);

/* Exercise 4 Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */

let calculator = {
  read() {
    this.a = parseFloat(prompt("First value:"));
    this.b = parseFloat(prompt("Second value:"));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//  Exercise 5 Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

let min = (a, b) => (a < b ? a : b);

console.log(min(3, 5));
