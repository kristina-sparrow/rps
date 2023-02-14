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
  cards.forEach((card) => {
    card.classList.toggle("hidden");
    card.classList.toggle("fade-in-long");
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
    roundResult = `Computer chose ${computerSelection}. \nIt's a tie! \nPlayer score: ${playerScore} \nComputer score: ${computerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    roundResult = `Computer chose ${computerSelection}. \nYou win, ${playerSelection} beats ${computerSelection}! \nPlayer score: ${playerScore} \nComputer score: ${computerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore += 1;
    roundResult = `Computer chose ${computerSelection}.
    Computer wins, ${computerSelection} beats ${playerSelection}... \nPlayer score: ${playerScore} \nComputer score: ${computerScore}`;
  }
  document.querySelector(".round-result").textContent = roundResult;
  if (playerScore === 3 || computerScore === 3) {
    document.querySelector(".game-result").textContent = endGame();
  }
}

function endGame() {
  document.querySelector(".btn-reset").classList.toggle("hidden");
  disableCards();
  if (playerScore === 3) {
    return "GAME OVER!\nYou win!";
  } else if (computerScore === 3) {
    return "GAME OVER!\nComputer wins...";
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
