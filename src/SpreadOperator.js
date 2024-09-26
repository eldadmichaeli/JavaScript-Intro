const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Spread arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread in objects
const obj1 = {name: 'Alice', id: "3214124", age: 23};
const obj2 = {age: 25};
const person = {...obj1, ...obj2};
console.log(person); // { name: 'Alice', age: 25 }
