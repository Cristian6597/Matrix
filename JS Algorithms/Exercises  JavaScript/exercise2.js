// Exercise 1 Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
  }
  
  let arr = [1, 2, 3, 4, 5, 6];
  let filteredArray = filterRange(arr, 2, 5);
  console.log(filteredArray);
  

// Exercises 2 You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

const users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  const names = users.map(user => user.name);
  
  console.log(names);
  

// Exercises 3 Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

function getAverageAge(users) {
    if (users.length === 0) {
      return 0; 
    }
  
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
  }
  

  const users1 = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ];
  
  const averageAge = getAverageAge(users);
  console.log("Average age:", averageAge);
  