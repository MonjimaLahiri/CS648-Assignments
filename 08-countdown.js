// Prompt the user for a starting number
let num = parseInt(prompt("Enter a number to start the countdown:"));

// Check if the input is a valid number
if (!isNaN(num) && num >= 0) {
    // Loop to count down from the number to 0
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Please enter a valid non-negative number.");
}
