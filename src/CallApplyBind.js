function greet(greeting, time) {
    console.log(`${greeting} and have a nice ${time}, my name is ${this.name}, my last name is ${this.lastName}`);
}

const person = {
    name: 'John',
    lastName: 'Doe'
};

greet.call(person, 'Hello', '1');  // Call method, passing context

greet.apply(person, ['Hello', 'morning']);  // Apply method, similar to call but arguments are passed as an array

const boundGreet = greet.bind(person);  // Bind method, returning a new function
boundGreet('Good morning',"day");  // "Good morning, my name is John"