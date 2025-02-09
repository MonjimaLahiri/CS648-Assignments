// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check for multiples of both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Marco! Polo!");
    } else if (i % 3 === 0) { // Check for multiples of 3
        console.log("Marco!");
    } else if (i % 5 === 0) { // Check for multiples of 5
        console.log("Polo!");
    } else {
        console.log(i); // Print the number if it's not a multiple of 3 or 5
    }
}
