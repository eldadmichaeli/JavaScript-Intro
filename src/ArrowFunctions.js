// Traditional function
function sum(a, b) {
    return a + b;
}

// Arrow function
const sumArrow = (a, b) => a + b;

console.log(sum(5, 10)); // 15
console.log(sumArrow(5, 10)); // 15

// Lexical 'this' in arrow functions:
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000); // 'this' refers to the Timer object
}
//This is because arrow functions do not have their own 'this' value