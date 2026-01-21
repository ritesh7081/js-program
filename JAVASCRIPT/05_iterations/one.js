// for loop example

for (let i = 1; i <= 5; i++) {
    if (i == 5) {
        console.log("Reached 5, exiting loop.");
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

let myArray = ['flash', 'arrow', 'superman', 'batman'];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// break and continue example

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log("Skipping number 4");
        continue; // skip the rest of the loop when i is 4
    }
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Breaking the loop at number 6");
        break; // exit the loop when i is 6
    }
    console.log(i);
}