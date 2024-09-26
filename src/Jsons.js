const jsonString = '{"name": "Alice", "age": 25}';

const parsedData = JSON.parse(jsonString);  // Convert JSON string to object
console.log(parsedData);  // { name: "Alice", age: 25 }

const object = {name: 'Bob', age: 30};
const stringified = JSON.stringify(object);  // Convert object to JSON string
console.log(stringified);  // '{"name":"Bob","age":30}'
