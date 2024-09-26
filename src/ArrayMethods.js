const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15



const numbers = [10, 20, 30, 40, 50];

// `some`: Checks if at least one element satisfies a condition
const hasNumberGreaterThan40 = numbers.some(num => num > 40);
console.log(hasNumberGreaterThan40);  // true

// `every`: Check if all elements satisfy a condition
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5);  // true

// `sort`: Sorting an array (note that it mutates the array)
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);  // [10, 20, 30, 40, 50]