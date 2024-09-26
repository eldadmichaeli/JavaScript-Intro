const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}


//Explanation: The for...of loop is used to iterate over an iterable object (Array, Map, Set, etc.).
//In this case, we are iterating over an array arr and logging each value to the console.
//The value variable holds the current element in each iteration.

//What's the iteration order of a for...of loop?
//The iteration order of a for...of loop is based on the order of the elements in the array.

//What is the difference between for...of and for...in loops?
//The for...of loop is used to iterate over the values of an iterable object (like an array),
//while the for...in loop is used to iterate over the keys of an object.

for(const key in arr) {
    console.log(key);
}

//is that works on Map and Set?
//Yes, the for...of loop works on Map and Set objects as well.
//It iterates over the values in the Map or Set.
//Example:
const set = new Set([1, 2, 3]);
for(const value of set) {
    console.log(value);
}
for (const key of set.keys()) {
    console.log(key);
}

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for(const entry of map) {
    console.log(entry);
}

for(const [key] of map) {
    console.log(key);
}

for(const key of map.keys()) {
    console.log(key);
}

for(const value of map.values()) {
    console.log(value);
}


