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

// 31-4 Foreach, Filter, Find and Differences Between Them

// foreach loop
// const numbers = [1, 2, 35, 5, 78, 9, 10, 23, 567];
// const result = numbers.forEach((n) => console.log(n));
// console.log(result);

// Filter selects some
// const numbers = [1, 2, 35, 5, 78, 9, 10, 23, 567];
// const players = [75, 65, 67, 72, 56, 59];
// const selected = players.filter((p) => p > 50);
// const selected = players.filter((p) => p % 2 === 0);
// console.log(selected);

// const players = [75, 65, 67, 72, 55, 59];
// const selected = players.find((player) => player > 70);
// const selected = players.find((player) => player > 80);
// console.log(selected);

/**
 * 1. map: The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
 * ১. ম্যাপ (বাংলা): ম্যাপ একটা এরের প্রত্যেকটা উপাদানের কাছে যায় এবং যেই কাজটা দেয়া থাকে তা প্রত্যেকটা উপাদানের জন্য করে এবং রেজাল্টটা একটা এরের মধ্যে রাখে এবং ফাইনাল এরেটাকেই রিটার্ন করে।
 * 2. forEach: The forEach() method of Array instances executes a provided function once for each array element
 * 3. filter: The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 * 4. find: The find() method instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
 */

// 31-5 (Recap) Map, ForEach,Filter, find, reduce
// const numbers = [75, 65, 67, 72, 55, 59];
// const total = numbers.reduce((a, b) => a + b, 0);
// console.log(total);

// const products = [
//   { id: 1, name: "Apple", price: 56000 },
//   { id: 2, name: "Dell", price: 66000 },
//   { id: 3, name: "Accer", price: 77000 },
//   { id: 4, name: "Walton", price: 88000 },
// ];

// Map
// const names = products.map((p) => p.name);
// console.log(names);
// const price = products.map((p) => p.price);
// console.log(price);

// forEach
// products.forEach((p) => console.log(p.id));

// filter
// const expensive = products.filter((p) => p.price > 80000);
// console.log(expensive);

// find
// const affordable = products.find((p) => p.price > 55000);
// console.log(affordable);

// reduce
// const total = products.reduce((accum, current) => accum + current.price, 0);
// console.log(total);

// 31-6 (Optional) Introduction To Class And Objects

// const products = [
//   { id: 1, name: "Apple", price: 56000 },
//   { id: 2, name: "Dell", price: 66000 },
//   { id: 3, name: "Accer", price: 77000 },
//   { id: 4, name: "Walton", price: 88000 },
// ];

// has some properties, method
// class Product {
//   country = "Bangladesh";
//   constructor(name) {
//     this.name = name;
//   }

//   speak(talk) {
//     console.log(`Talking about ${talk}`);
//   }
// }

// const lenevo = new Product("Le Le Lenevo");
// console.log(lenevo);

// lenevo.speak("Oba Kita Kou");

// class Teacher {
//   lecture() {
//     console.log(`Sir is teaching Math`);
//   }
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//   }
// }

// const rony = new Teacher("Rony", "Math");
// console.log(rony);

// const milon = new Teacher("Milon", "ICT");
// console.log(milon);

// 31-7 (Optional)Inheritance Prototypical Inheritance

// class Vehicle {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   move() {
//     console.log(`Gari Chole na Chole na Cholena re`);
//   }
// }

// class Bus extends Vehicle {
//   constructor(name, price, seat, ticketPrice) {
//     super(name, price);
//     this.seat = seat;
//     this.ticketPrice = ticketPrice;
//   }
// }

// class Truck extends Vehicle {
//   constructor(name, price, load) {
//     super(name, price);
//     this.load = load;
//   }

// }

// 31-8 (Advanced) This keyword, Dot Notation Vs Bracket Notation

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     console.log(`Sleeping now ${this.name}`);
//   }
//   activity() {
//     this.sleep();
//   }
// }

// const kodom = new Person("Kodom Ali", 28);
// console.log(kodom);
// kodom.sleep();

// const badam = new Person("Kacha Badam", 23);
// badam.sleep();

// const nut = new Person("Nut ", 21);
// nut.activity();

// Bejal
// const lazy = kodom.sleep;
// lazy();

// const person = {
//   name: "Kodom Ali",
//   job: "Badam Khai",
// };
// console.log(person["job"]);
