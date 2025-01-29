//  31-0 Basic ES6 Concept

//  31-1 Module introduction and basic es6 recap
/**
 * 1. var , let , const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string,
 * 8. for in loop used in object
 */

const a = 56;
const numbers = [55, 9, 8];
const person = {
  name: "sakib Khan",
};

const message = `Hi, ${person.name} has a  ${a} access to ${numbers[2]}`;
console.log(message);

if (true) {
}

const square = (x) => x * x;
const sum = (a, b) => a + b;

const { age, z, ...others } = { x: 2, y: 5, z: 3, name: "Ovijit", age: 55 };

const [first, second, ...remaining] = ["sam", " jodu", "modhu"];
