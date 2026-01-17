// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

if (true) {
    let a = 40;
    const b = 50;
    var c = 60;
}
console.log(a); // error: a is not defined
console.log(b); // error: b is not defined
console.log(c); // 60

// in code environment like nodejs scope is different but in browser core scope is window



// nested scope

function one() {
    const username = "user1";

    function two() {
        website = "youtube.com";
        console.log(username); // user1
    }
    console.log(website); // error: website is not defined
    two();
}
one();

if (true) {
    const username = "Ritesh";
    if (username === "Ritesh") {
        const website = " youtube";
        console.log(username + website); // Ritesh youtube
    }
    console.log(website); // error: website is not defined
}
console.log(username); // error: username is not defined




// ******************************* Intersting *******************************

console.log(addOne(5)); // 6
function addOne(num) { //function declaration / named function
    return num + 1;
}


addTwo(5); // error: addTwo is not defined
const addTwo = function(num) { //function expression / anonymous function
    return num + 2;
}
