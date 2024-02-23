// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Track number of guesses
let guesses = 0;

function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Increment the number of guesses
    guesses++;

    // Get the message element
    const message = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        message.innerHTML = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses} guesses.`;
        message.style.color = 'green';
        document.getElementById('guessInput').setAttribute('disabled', 'true');
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }

    // Clear the input field after each guess
    document.getElementById('guessInput').value = '';
}
