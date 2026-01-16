// Primitive Data Types in JavaScript

// 7 types: String, Number, BigInt, Boolean, Undefined, Symbol, Null

const score = 100; // Number
const scoreValue = 100.5; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol("1234"); // Symbol
const anotherId = Symbol("1234");

console.log(anotherId === id); // false

const bigNumber = 3456789012345678901234567890n; // BigInt

// Refrence (Non-Primitive) Data Types in JavaScript

// Array, Object, Functions etc.

const heros = ["shaktiman", "naagraj", "doga"]; // Array

const myObj = {
  name: "Ritesh",
  age: 23,
}; // Object

const myFunc = function () {
  console.log("Hello World");
}; // Function

console.log(typeof bigNumber); // bigint
console.log(typeof myFunc); // function