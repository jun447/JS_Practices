// random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

// get the user input
const subt = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100!");
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 10) {
      displayGuesses(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}
function displayGuesses(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}  `;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    subt.setAttribute("disabled", "");
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", function resetGame() {
        numGuesses = 1;
        previousGuesses = [];
        remaining.innerHTML = `${11 - numGuesses}  `;
        guessSlot.innerHTML = "";
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        subt.removeAttribute("disabled");
        resetButton.parentNode.removeChild(resetButton);
        playGame = true;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        // console.log(randomNumber);

    });

}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed correctly!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too low! Try again!`);
  } else if (guess > randomNumber) {
    displayMessage(`Too High! Try again!`);
  }
}

if (playGame) {
  subt.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}