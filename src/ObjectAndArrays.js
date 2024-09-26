const person =
    {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            country: 'USA'
        },
        id: 113545235
    };

const updatedPerson = {...person, age: 31, id: 29987054 }; // Immutable update with spread operator
console.log(person)
console.log(updatedPerson);  // { name: 'John', age: 31 }

const numbers = [1, 2, 3];
const updatedNumbers = [...numbers, 4];  // Adding an element (immutable)
console.log(updatedNumbers);  // [1, 2, 3, 4]


// Working with objects
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

car.year = 2021;  // Mutable operation (modifying the existing object)
console.log(car);  // { brand: 'Toyota', model: 'Corolla', year: 2021 }

const updatedCar = { ...car, model: "Camry" };  // Immutable operation (creating a new object)
console.log(updatedCar);  // { brand: 'Toyota', model: 'Camry', year: 2021 }

// Working with arrays
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");  // Mutable operation
console.log(fruits);  // ["apple", "banana", "orange", "grape"]

const newFruits = [...fruits, "mango"];  // Immutable operation
console.log(newFruits);  // ["apple", "banana", "orange", "grape", "mango"]
console.log(fruits);  // ["apple", "banana", "orange", "grape"]