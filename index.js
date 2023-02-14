let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
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

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  let roundResult = "";
  let computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    roundResult = `Computer chose ${computerSelection}. It's a tie! \n<span class="scores">Player score: ${playerScore} Computer score: ${computerScore}</span>`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    roundResult = `Computer chose ${computerSelection}. You win, ${playerSelection} beats ${computerSelection}! \n<span class="scores">Player score: ${playerScore} Computer score: ${computerScore}</span>`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
    roundResult = `Computer chose ${computerSelection}.
    Computer wins, ${computerSelection} beats ${playerSelection}... \n<span class="scores">Player score: ${playerScore} Computer score: ${computerScore}</span>`;
  }
  document.querySelector(".round-result").innerHTML = roundResult;
  if (playerScore === 3 || computerScore === 3) {
    document.querySelector(".game-text").innerHTML = endGame();
  }
}

function endGame() {
  document.querySelector(".btn-reset").classList.toggle("hidden");
  disableCards();
  if (playerScore === 3) {
    return `<span class="result won">GAME OVER! You win!</span>`;
  } else if (computerScore === 3) {
    return `<span class="result won">GAME OVER!\nComputer wins...</span>`;
  }
}

function disableCards() {
  cards.forEach((card) => {
    card.classList.toggle("disabled");
  });
}

function enableCards() {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      playRound(card.id);
    });
  });
}
