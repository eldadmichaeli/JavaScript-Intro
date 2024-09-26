// Mutable: modifies the original object
let person = { name: "Alice", age: 25 };
person.age = 26;  // Mutating the original object
console.log(person);  // { name: "Alice", age: 26 }

// Immutable: create a new object
let updatedPerson = { ...person, age: 30 };  // Non-mutating (creating a new object)
console.log(updatedPerson);  // { name: "Alice", age: 30 }

// Mutable: changes original array
let colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow");  // Replacing "green" with "yellow"
console.log(colors);  // ["red", "yellow", "blue"]

// Immutable: create a new array
let newColors = [...colors, "purple"];  // Non-mutating
console.log(newColors);  // ["red", "yellow", "blue", "purple"]