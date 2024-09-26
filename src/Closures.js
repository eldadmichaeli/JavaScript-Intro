function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner; // returning the inner function
}

const increment = outer();

increment();  // 1

increment();  // 2



function makeCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        }
    };
}

const counter = makeCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.decrement();  // 1