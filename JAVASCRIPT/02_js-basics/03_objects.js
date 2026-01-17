// when we make an object from constructor function so it is singleton
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    [mySym]: "mykey1",
    name: "Ritesh",
    "full name": "Ritesh Kumar",
    age: 22,
    location: "India",
    email: "ritesh@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};

console.log(JsUser.email); // Output: ritesh@example.com
console.log(JsUser["email"]); // Output: ritesh@example.com
console.log(JsUser["full name"]); // Output: Ritesh Kumar
console.log(JsUser[mySym]); // Output: mykey1
console.log(typeof(JsUser[mySym])); // Output: string

JsUser.email = "riteshkumar@example.com";
console.log(JsUser.email); // Output: riteshkumar@example.com

// Object.freeze(JsUser); // now we cannot change any property of this object
JsUser.email = "riteshkma@example.com"; // this will not work
console.log(JsUser.email); // Output: riteshkumar@example.com

console.log(JsUser); 
/* Output:
{
  name: 'Ritesh',
  'full name': 'Ritesh Kumar',
  age: 22,
  location: 'India',
  email: 'riteshkumar@example.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Friday' ],
  [Symbol(key1)]: 'mykey1'
}
*/
// to get all keys of object

JsUser.greeting = function() {
    console.log("Hello, Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello, Js User, ${this.name}`);
}

console.log(JsUser.greeting); // Output: [Function (anonymous)]
console.log(JsUser.greeting()); // Output: Hello, Js User
console.log(JsUser.greetingTwo()); // Output: Hello, Js User, Ritesh