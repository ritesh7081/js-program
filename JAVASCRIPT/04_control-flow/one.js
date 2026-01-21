// if statement
const isUserLoggedIn = true;

if (2 == "2") { // it will execute because of type coercion
    console.log("executed");
}
if (2 === "2") { // it will not execute because strict equality checks both value and type
    console.log("executed");
}

// <=, >=, <, >, ==, !==, ===, !==

// if...else statement

const temperature = 41;

if (temperature > 40) {
    console.log("It's too hot outside.");
} else {
    console.log("The temperature is acceptable.");
}

const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User Power: ${power}`);
}
// console.log(power); // This will throw an error because 'power' is block-scoped

const balanace = 1000;
if (balanace > 500) console.log("You have sufficient balance.");

// if...else if...else statement

if (balanace < 500) {
    console.log("Less than 500");
} else if(balanace >= 500 && balanace < 1000) {
    console.log("Between 500 and 1000");
} else {
    console.log("More than or equal to 1000");
}

const isUserLoggedIn2 = true
const debitCard = true;

if (isUserLoggedIn2 && debitCard) { // Both conditions are true
    console.log("You can make a purchase.");
}

const loggedInFromGoogle = false;
const LoggrdInFromEmail = true;

if (loggedInFromGoogle || LoggrdInFromEmail) { // At least one condition is true
    console.log("User is logged in."); 
}