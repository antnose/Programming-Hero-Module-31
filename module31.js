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

// const a = 56;
// const numbers = [55, 9, 8];
// const person = {
//   name: "sakib Khan",
// };

// const message = `Hi, ${person.name} has a  ${a} access to ${numbers[2]}`;
// console.log(message);

// if (true) {
// }

// const square = (x) => x * x;
// const sum = (a, b) => a + b;

// const { age, z, ...others } = { x: 2, y: 5, z: 3, name: "Ovijit", age: 55 };

// const [first, second, ...remaining] = ["sam", " jodu", "modhu"];

// 31-2 Access Value, Nested Object, Optional Chaining
/**
 * 1. Date Access
 */

// const data = [{ id: 1, name: "Abul", address: "Kochukhet" }];

// console.log(data[0].address);

// const products = {
//   count: 5000,
//   data: [
//     {
//       id: 1,
//       name: "Lenevo",
//       price: 65000,
//     },
//     {
//       id: 2,
//       name: "macbook",
//       price: 16500,
//     },
//   ],
// };

// console.log(products.data[1].id);

// const user = {
//   id: 5001,
//   name: "Shoriful Raj",
//   address: {
//     street: {
//       first: "52/1 uttor side",
//       second: "Poribag er goli",
//       third: "Nodora",
//     },
//     city: "Dhaka",
//   },
// };
// console.log(user.address.street.second);

// const user2 = {
//   id: 44403,
//   name: "Pori Bibir Majar",
//   address: {
//     city: "Dhaka",
//     country: "BD",
//   },
// };

// console.log(user2.address.street?.second);
// I use a question mark after street this question mark called optional chain

//---> 31-3 Array Map To Do One Line Loop Magic <---\\

// map ==> Loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

// const numbers = [4, 5, 7, 8, 9, 10];

// // ##### First Method Start
// function doubleIt(num) {
//   return num * 2;
// }
// const result = numbers.map(doubleIt);
// // ##### First Method End

// Second Method Start #####

// const double2 = (n) => n * 2;
// const output = numbers.map(double2);
// console.log(output);

// Second Method End #####

// Third Method Start #####
// const output2 = numbers.map((n) => n * 2);
// console.log(output2);
// Third Method End #####

// const numbers = [12, 10, 8, 14, 9];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// const fiveBonus = numbers.map((num) => num + 5);
// console.log(fiveBonus);

// const friends = ["Tom", "John", "Michel", "Oliver"];
// const lengths = friends.map((n) => n.length);
// console.log(lengths);

// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
// console.log(doubled);

// 7.08
