// DOM Elements
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const dicePic = document.querySelector(".dice");
const scoreP1Display = document.querySelector("#score--0");
const scoreP2Display = document.querySelector("#score--1");
const currentScoreP1Display = document.querySelector("#current--0");
const currentScoreP2Display = document.querySelector("#current--1");

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Global Variables
let currentScore, activePlayer, score, playing;

// Functions

// Set Initial/Starting conditions
const init = () => {
  dicePic.classList.add("hidden");
  scoreP1Display.textContent = 0;
  scoreP2Display.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;
};

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

init();

// Roll dice functionality

// 1. (a) Roll Dice is clicked, (b) random number between 1 and 6 is generated and (c) dice with the same number appears
// 2. (a) Is it a 1? If it isn't, (b) the number on dice gets added to current score and (c) is displayed
// 3. (a) If a 1 is rolled, (b) current score becomes 0 and is displayed, and (c) it switches to next player and (d) the background changes to highlight new active player
btnRollDice.addEventListener("click", () => {
  if (playing) {
    // 1a
    const randomNum = Math.trunc(Math.random() * 6) + 1; // 1b
    console.log(randomNum);
    dicePic.src = `./images/dice-${randomNum}.png`; // 1c
    dicePic.classList.remove("hidden"); // 1c

    if (randomNum !== 1) {
      currentScore += randomNum; // 2b
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore; // 2c
    } else {
      // 3a
      currentScore = 0; // 3b
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore; // 3b
      switchPlayer(); // 3c
    }
  }
});

// Hold button functionality

// When button clicked:
// 1 Current score is added to total score for the active player and is displayed
// 2 Check if total score for active player is < or > than 100:
// 3 If total score for active player < 100:
// 3(a) Current score becomes 0
// 3(b) Active player switches to next player
// 3(c) Background of active player is highlighted
// 4 If total score for active player >= 100:
// 4(a) Add .player--winner to active player, to make the background of that player black
// 4(b) New Game, Roll Dice and Hold buttons are not clickable
btnHold.addEventListener("click", () => {
  if (playing) {
    score[activePlayer] += currentScore; // 1
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer]; // 1

    if (score[activePlayer] < 20) {
      currentScore = 0; // 3a
      switchPlayer(); // 3b and 3c
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner"); // 4a
      playing = false; // 4b
    }
  }
});
