const obj = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

obj.greet();  // "Hello, my name is Alice"
let name = 'Bob';
// Arrow function and `this`
const obj2 = {
    name: 'Bob',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);  // `this` in arrow functions refers to the outer context
    }
};
obj2.greet();  // "Hello, my name is undefined"