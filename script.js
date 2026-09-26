// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

// Get elements from HTML
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");


// Function to check the guess
function checkGuess() {

    let guess = Number(guessInput.value);

    // Check if input is empty or invalid
    if (guess < 1 || guess > 100 || guessInput.value === "") {
        message.textContent = "⚠️ Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    attemptsDisplay.textContent = attempts;

    // Check the guess
    if (guess < secretNumber) {

        message.textContent = "📉 Too low! Try again.";

    } else if (guess > secretNumber) {

        message.textContent = "📈 Too high! Try again.";

    } else {

        message.textContent =
            "🎉 Congratulations! You guessed it in " +
            attempts +
            " attempts!";

        guessButton.disabled = true;

        guessInput.disabled = true;

        restartButton.style.display = "block";
    }

    // Clear input
    guessInput.value = "";

    guessInput.focus();
}


// Function to restart the game
function restartGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsDisplay.textContent = attempts;

    message.textContent = "Good luck! 🍀";

    guessInput.disabled = false;

    guessButton.disabled = false;

    restartButton.style.display = "none";

    guessInput.value = "";

    guessInput.focus();
}
