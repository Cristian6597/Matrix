function person(name, age) {
  this.name = name;
  this.age = age;
  this.introduction = function () {
    console.log(
      `Hello! My name is ${this.name} and I'm ${this.age} years old.`
    );
  };
}


const person1 = new person("John", 25);

person1.introduction();

function describePerson(callback) {
  callback.call(person1);
}

function logPersonDetails() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

function logPersonDetails() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, milliseconds);
  });
}

wait(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
