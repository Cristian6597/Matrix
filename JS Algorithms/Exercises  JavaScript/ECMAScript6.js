// 1.1

let user = {
  name: "John",
  years: 30,
};

let { name } = user;
let { years } = age;

let isAdmin = user.isAdming ? user.isAdmin : false; // controlla se l oggetto contiene isAdmin, se non c'è ritorna falso. ( ritorna il valore di is.Admin)

// 2

const planet = "Earth";
let visitors = "Humans";

// 3

let phrase = "Hello";

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); //Hello, Jonh

// 4

let userMale = {
  nameMale: "Jonh",
  surname: "Smith",
};

let { nameMale } = "Pete";

delete userMale.nameMale;

console.log(userMale);

//5

const user1 = {
  name: "John",
};

// does it work? No
user1.name = "Pete";

// 6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

let sum = 0;

for (let person in salaries) {
  sum += salaries[person];
}

if (sum === 0) {
  sum = 0;
}

console.log(sum);

// 7

let result = (a + b < 4) ? 'Below' : 'Over';

// 8

let message = (login == 'Employee') ? 'Hello' 
             : (login == 'Director') ? 'Greetings' 
             : (login == '') ? 'No login' 
             : '';