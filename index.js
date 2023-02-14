let scores = { player: 0, computer: 0 };
const choices = ["rock", "paper", "scissors"];
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
const cards = document.querySelectorAll(".card");
const startButton = document.querySelector(".btn-start");
startButton.addEventListener("click", startGame);

function startGame() {
  document.querySelector(".starting-container").classList.toggle("hidden");
  document.querySelector(".game-text").classList.toggle("hidden");
  document.querySelector(".card-container").classList.toggle("hidden");
  document.querySelector(".score-container").classList.toggle("hidden");
  cards.forEach((card) => {
    card.classList.toggle("hidden");
    card.classList.toggle("fade-in");
  });
  enableCards();
}

function enableCards() {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      playRound(card.id);
    });
  });
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  let roundResult = "";
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    roundResult = `Computer chose ${computerSelection}. It's a tie!`;
  } else if (beats[playerSelection] === computerSelection) {
    scores.player++;
    roundResult = `Computer chose ${computerSelection}. You win, ${playerSelection} beats ${computerSelection}!`;
  } else {
    scores.computer++;
    roundResult = `Computer chose ${computerSelection}. Computer wins, ${computerSelection} beats ${playerSelection}...`;
  }
  roundResult += ` <span class="scores">Player score: ${scores.player} Computer score: ${scores.computer}</span>`;
  document.querySelector(".round-result").innerHTML = roundResult;
  if (scores.player === 3 || scores.computer === 3) {
    document.querySelector(".game-text").innerHTML = endGame();
  }
}

function endGame() {
  document.querySelector(".btn-reset").classList.toggle("hidden");
  disableCards();
  if (scores.player === 3) {
    return `<span class="result won">GAME OVER! You win!</span>`;
  } else if (scores.computer === 3) {
    return `<span class="result won">GAME OVER!\nComputer wins...</span>`;
  }
}

function disableCards() {
  cards.forEach((card) => {
    card.classList.toggle("disabled");
  });
}
