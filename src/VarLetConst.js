var x = 10; // Function-scoped, can be redeclared
let y = 20; // Block-scoped, cannot be redeclared in the same block
const z = 30; // Block-scoped, must be initialized, cannot be reassigned

if (true) {
    var x = 40; // This redeclares 'x' globally
    let y = 50; // This 'y' is scoped to the block
    const z = 60; // This 'z' is scoped to the block
}

console.log(x); // 40 (var is function-scoped)
console.log(y); // 20 (let is block-scoped)
console.log(z); // 30 (const is block-scoped)



const item = "I'm a constant and immutable value.";
// item = "124"; // TypeError: Assignment to constant variable.

const person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed
console.log(person); // { name: "Alice", age: 26 }

// person = { name: "Bob", age: 30 }; // TypeError: Assignment to constant variable.

const car= {model: "Toyota", year: 2020, mileage: 5000};
const {model, year} = car; //Extracting properties
console.log(model, year);  // "Toyota" 2020