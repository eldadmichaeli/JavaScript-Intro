// Array destructuring

const arr = [1, 2, 3];
const [a,_, c] = arr;

console.log(a); // 5
console.log(c); // 5


// Object destructuring
const person = {
    name: 'Bob',
    age: 30
};
const {name, age} = person;
name = "Eldad";
console.log(name, age);