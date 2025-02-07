// Declare the variable
let coinFlip;

// Loop 10 times
for (let i = 0; i < 10; i++) {
    // Generate a random number (0 or 1) to simulate a coin flip
    coinFlip = Math.floor(Math.random() * 2); // 0 for Heads, 1 for Tails

    // Check the result and log it to the console
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
