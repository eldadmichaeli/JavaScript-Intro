let name = "NICE";
let age = 38;
let isValid = true;
let notDefined = undefined;
let emptyValue = null;

console.log(`This is a ${typeof name} with value ${name}`);  // "string"
console.log(`This is a ${typeof age} with value ${age}`);  // "number"
console.log(`This is a ${typeof isValid} with value ${isValid}`);  // "boolean"
console.log(`This is a ${typeof emptyValue} with value ${emptyValue}`);  // "object"

// Operations on primitive types
const greeting = `Hello, my name is ${name}, and I am ${age} years old.`;
console.log(greeting);  // "Hello, my name is NICE, and I am 38 years old."

let score = 99;
console.log(`My score is ${score}`);  // "My score is 99"

console.log(`My score is ${score + "1"}`);  // "My score is 991"

console.log(`My score is ${ score + notDefined}`);  // "My score is NaN"

console.log(`My score is ${ score + emptyValue}`);  // "My score is 99"