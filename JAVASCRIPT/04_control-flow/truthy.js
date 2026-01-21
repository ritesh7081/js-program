const userEmail = "r@itesh.ai";

if (userEmail) {
  console.log(`Got user email`);
} else {
  console.log(`Don't have user email`);
}

// falsy values in JavaScript:
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN


// truthy values in JavaScript:
// true
// "0", "false", " " (a string with a single zero character)
// any non-zero number (e.g., 42, -42)
// any non-empty string (e.g., "hello")
// objects (e.g., {}, [])
// BigInt values other than 0n (e.g., 1n, -1n)
// Symbol values
// function() {}
// arrays (e.g., [1, 2, 3])

if (userEmail.length === 0) {
    console.log(`Don't have user email`);
}


const emptyObj = {};

if ((emptyObj).length === 0) {
    console.log(`Object is empty`);
}


// Nullish coalescing operator (??): null or undefined

let val1;
// val1 = 5 ?? 10; // val1 will be 5 because it's not null or undefined
// val1 = null ?? 10; // val1 will be 10 because the left side is null
// val1 = undefined ?? 15; // val1 will be 15 because the left side is undefined
val1 = null ?? 10 ?? 15; // val1 will be 10 because the left side is null
console.log(val1);

//?. Optional chaining operator

const user = {
    name: "Itesh",
    // address: {
    //     street: "123 Main St",
    //     city: "Anytown"
    // }
};
console.log(user.address?.street); // undefined, does not throw an error
console.log(user.name?.firstName); // undefined, does not throw an error

// Ternary operator
// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 100;
iceTeaPrice < 50 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");