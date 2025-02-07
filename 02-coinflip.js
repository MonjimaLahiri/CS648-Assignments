// Generate a random number (0 or 1) to simulate a coin flip
let coinFlip = Math.floor(Math.random() * 2); // 0 for Heads, 1 for Tails

// Prompt the user to select "Heads" or "Tails"
let choice = prompt("Heads or Tails?").toLowerCase(); // Convert input to lowercase for consistency

// Determine the result of the coin flip
let isHeads = (coinFlip === 0);

// Check the user's choice and compare it with the coin flip result
if (isHeads && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (isHeads && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (!isHeads && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (!isHeads && choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid input! Please enter 'Heads' or 'Tails'.");
}
