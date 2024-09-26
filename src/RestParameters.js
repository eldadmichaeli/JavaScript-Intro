function sum(parm1, parm2, ...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function input(...args) {
    console.log(args);
}

input("1", 1, true)

console.log(sum(1, 2, 3, 4, 5, 6)); // 10

///The ... operator is called the rest operator
// it is used to collect all the remaining arguments into an array
// it is similar to the arguments object in a function
// But it is more flexible and easier to work with
// the rest operator must be the last parameter in the function
// And it can only appear once in the parameter list
// it is also used in destructuring and spread syntax
