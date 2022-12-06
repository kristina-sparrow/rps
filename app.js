// list choices in an array
const choices = ["rock", "paper", "scissors"]

// get random computer choice from array
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}

// initialize scores
let playerScore = 0;
let computerScore = 0;
let winner = "";
let isGameOver = false;

//play single round
function playRound(playerSelection, computerSelection) {
    // make input case insensitive
    playerInput = playerSelection.toLowerCase();
    // determine winner & print scores
    if (playerInput === computerSelection) {
        return `Computer chose ${computerSelection}.\nIt's a tie!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    } else if (
        (playerInput === "rock" && computerSelection === "scissors") ||
        (playerInput === "paper" && computerSelection === "rock") ||
        (playerInput === "scissors" && computerSelection === "paper")
     ) {
        playerScore += 1;
        return `Computer chose ${computerSelection}.\nYou win, ${playerInput} beats ${computerSelection}!\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    } else if (
        (playerInput === "rock" && computerSelection === "paper") ||
        (playerInput === "paper" && computerSelection === "scissors") ||
        (playerInput === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        return `Computer chose ${computerSelection}.\nComputer wins, ${computerSelection} beats ${playerInput}...\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    }  else {
        return 'Invalid input! Please choose rock, paper or scissors.';
    }
}

// determine winner over multiple rounds
function endGame () {
    if (playerScore > computerScore) {
        winner = "You";
        return `GAME OVER! ${winner} are the winner!`;
    } else if (computerScore > playerScore) {
        winner = "Computer";
        return `GAME OVER! ${winner} is the winner!`;
    } else {
        return "It's a tie. Play again!"
    }
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    winner = "";
}

function game() {
    // loop playRound 5 times
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon (rock, paper, scissors): ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(endGame());
    resetGame();
}
game();