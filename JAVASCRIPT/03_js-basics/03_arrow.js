const user = {
    username: "Ritesh",
    price: 5000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website!`);
        console.log(this);
    }
}

user.welcomeMessage(); 
/* Output:
Ritesh , welcome to website!
{
  username: 'Ritesh',
  price: 5000,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username = "John";
user.welcomeMessage(); 
/* Output:
John , welcome to website!
{
  username: 'John',
  price: 5000,
  welcomeMessage: [Function: welcomeMessage]
}
*/
console.log(this); // {} => In Node.js, 'this' at the top level refers to an empty object
// In a browser environment, 'this' at the top level would refer to the Window object

function chai() {
    console.log(this); // In non-strict mode, this refers to the global object (Window in browsers, global in Node.js)
}
chai();
/* Output (Node.js):
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/ 

// function chai() {
//     let username = "Ritesh";
//     console.log(this.username); // undefined, as 'this' does not refer to the function's scope
// }
// chai();

// const chai = function() {
//     let username = "Ritesh";
//     console.log(this.username); // undefined, as 'this' does not refer to the function's scope
// }
// chai();

// const chai = () => {
//     let username = "Ritesh";
//     console.log(this.username); // undefined, as arrow functions do not have their own 'this' context
// }
// chai();


// ************************************** Arrow Function ***************************************

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }

// console.log(addTwo(5, 10)); // 15

// const addTwo = (num1, num2) => (num1 + num2); // implicit return

// console.log(addTwo(5, 10)); // 15

const addTwo = (num1, num2) => ({username: "Ritesh"}); // implicit return

console.log(addTwo(5, 10)); // { username: 'Ritesh' }