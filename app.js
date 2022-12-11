const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    let roundResult = ""
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        roundResult = `Computer chose ${computerSelection}.\nIt's a tie!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
     ) {
        playerScore += 1;
        roundResult = `Computer chose ${computerSelection}.\nYou win, ${playerSelection} beats ${computerSelection}!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        roundResult = `Computer chose ${computerSelection}.\nComputer wins, ${computerSelection} beats ${playerSelection}...\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    }
    document.getElementById("round-result").textContent = roundResult;
    let gameResult = endGame();
    document.getElementById("game-result").textContent = gameResult;
}

function endGame () {
    if (playerScore === 5) {
        disableButtons();
        return "GAME OVER!\nYou are the winner! Refresh the page to play again.";
    } else if (computerScore === 5) {
        disableButtons();
        return "GAME OVER!\nComputer is the winner... Refresh the page to play again.";
    } else return;
}

function disableButtons () {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

buttons.forEach(button => {
    button.addEventListener("click", function () {
        playRound(button.id);
    })
})

