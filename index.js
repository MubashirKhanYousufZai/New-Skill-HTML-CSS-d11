document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userGuess = parseInt(document.getElementById('guessInput').value);
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    
    let resultMessage;

    if (userGuess === randomNumber) {
        resultMessage = "Congratulations! You guessed the right number :)";
    } else {
        resultMessage = `Oops! You guessed wrong. The correct number was ${randomNumber}. Try again :)`;
    }

    document.getElementById('result').innerText = resultMessage;
});

