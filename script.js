// DOM Elements
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const dicePic = document.querySelector(".dice");
const scoreP1Display = document.querySelector("#score--0");
const scoreP2Display = document.querySelector("#score--1");
const btnRollDice = document.querySelector(".btn--roll");
const currentScoreP1Display = document.querySelector("#current--0");
const currentScoreP2Display = document.querySelector("#current--1");

// Global Variables
let currentScore, activePlayer;

// Functions

// Set Initial/Starting conditions
const init = () => {
  dicePic.classList.add("hidden");
  scoreP1Display.textContent = 0;
  scoreP2Display.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
};

init();

// Roll dice functionality

// 1. (a) Roll Dice is clicked, (b) random number between 1 and 6 is generated and (c) dice with the same number appears
// 2. (a) Is it a 1? If it isn't, (b) the number on dice gets added to current score and (c) is displayed
// 3. (a) If a 1 is rolled, (b) current score becomes 0 and is displayed, and (c) it switches to next player and (d) the background changes to highlight new active player
btnRollDice.addEventListener("click", () => {
  // 1a
  const randomNum = Math.trunc(Math.random() * 6) + 1; // 1b
  console.log(randomNum);
  dicePic.src = `./images/dice-${randomNum}.png`; // 1c
  dicePic.classList.remove("hidden"); // 1c

  if (randomNum !== 1) {
    // 2a
    currentScore += randomNum; // 2b
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore; // 2c
  } else {
    // 3a
    currentScore = 0; // 3b
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore; // 3b
    activePlayer = activePlayer === 0 ? 1 : 0; // 3c
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
});
