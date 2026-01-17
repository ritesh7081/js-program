function sayMyName() {
    console.log("R");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName();

// function addTwoNumbers(num1, num2) { // here num1 and num2 are parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) { // here num1 and num2 are parameters
    // let result = num1 + num2;
    // console.log("Ritesh"); 
    return num1 + num2;
}

// addTwoNumbers(5, 10); // here 5 and 10 are arguments

const result = addTwoNumbers(7, 3); // this will print 10 but result will be undefined
// console.log("Result: ", result); // undefined because the function does not return anything

function loginUserMessage(username = "Sam") {
    if (!username) {
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Ritesh")); // "Ritesh just logged in"
console.log(loginUserMessage()); // "Sam just logged in"
console.log(loginUserMessage("")); // "Please enter a username"
console.log(loginUserMessage(undefined)); // "Sam just logged in"
console.log(loginUserMessage(null)); // "Please enter a username"
console.log(loginUserMessage(0)); // "0 just logged in"
console.log(loginUserMessage(false)); // "false just logged in"
console.log(loginUserMessage("Ritesh")); // "Ritesh just logged in"

function calculateCartPrice(...prices) { // rest operator
    return prices;
}

console.log(calculateCartPrice(100, 200, 300, 400)); // [100, 200, 300, 400]

const user = {
    username: "Ritesh",
    price: 500
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Username is Ritesh and price is 500

handleObject({ 
    username: "Sam", 
    price: 1000 
}); // Username is Sam and price is 1000

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondElement(getArray) {
    return getArray[1];
}   

// console.log(returnSecondElement(myNewArray)); // 2
console.log(returnSecondElement([10, 20, 30, 40, 50])); // 20