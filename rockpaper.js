const btnRock = document.querySelector('#btn1');
const btnPaper = document.querySelector('#btn2');
const btnScissors = document.querySelector('#btn3');
const body = document.querySelector('body');

const output = document.querySelector('#output');
const score = document.querySelector('#score');

let turnsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3); // random integer from 0 to 3
    let option = choices[choice];

    return option;
}

function playRound(playerInput, computerMove) {
    let playerMove = playerInput.toLowerCase()
    if (playerMove === computerMove) {
        let message = playerMove.toUpperCase() + " and " + computerMove.toUpperCase();
        console.log(message + "? It's a draw!");
        output.textContent = message + "? It's a draw!";
        body.style.backgroundColor = "paleturquoise";
        return "draw";
    }
    else if (playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" || playerMove === "scissors" && computerMove === "paper") {
        let message = playerMove.toUpperCase() + " beats " + computerMove.toUpperCase();
        console.log(message + ". You win!");
        output.textContent = message + ". You win!";
        body.style.backgroundColor = "palegreen";
        playerWins += 1;
        return "player";
    }
    else {
        let message = computerMove.toUpperCase() + " beats " + playerMove.toUpperCase();
        console.log(message + ". You lose!");
        output.textContent = message + ". You lose!";
        body.style.backgroundColor = "palevioletred";
        computerWins += 1;
        return "computer";
    }
}

function game(turns) {
    let playerWins = 0;
    let computerWins = 0;
    let turnsPlayed = 0;

    while (turnsPlayed < turns) {
        playerSelection = prompt("Pick 'rock', 'paper', or 'scissors'.")
        if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            let computerSelection = computerPlay();
            console.log("Computer picks " + computerSelection + "...");
            let outcome = playRound(playerSelection, computerSelection);
            if (outcome === "player") {
                playerWins += 1;
            }
            else if (outcome === "computer") {
                computerWins += 1;
            }
            turnsPlayed += 1;
        }
        else {
            console.log(playerSelection + " was not recognised...");
        }
    }

    console.log("You won " + playerWins + " times.");
    console.log("You lost " + computerWins + " times.");
    if (playerWins > computerWins) {
        console.log("You win!");
    }
    else if (playerWins < computerWins) {
        console.log("You lose!");
    }
    else {
        console.log("Wow! A draw!");
    }
}


function updateScore() {
  if (turnsPlayed > 5) turnsPlayed = 1;
  if (turnsPlayed === 5) {
    if (playerWins > computerWins) {
      score.textContent = "Game won!" + "\n" + playerWins + " / " + turnsPlayed;
    }
    else if (playerWins < computerWins) {
      score.textContent = "Game lost!" + "\n" + playerWins + " / " + turnsPlayed;
    }
    else {
      score.textContent = "Wow! A draw!" + "\n" + playerWins + " / " + turnsPlayed;
    }
    playerWins = 0;
    computerWins = 0;
  }
  else {
    score.textContent = playerWins + " / " + turnsPlayed;
  }
}

btnRock.addEventListener('click', () => {
  outcome = playRound('rock', computerPlay());
  turnsPlayed += 1;
  updateScore();
});

btnPaper.addEventListener('click', () => {
  outcome = playRound('paper', computerPlay());
  turnsPlayed += 1;
  updateScore();
});

btnScissors.addEventListener('click', () => {
  outcome = playRound('scissors', computerPlay());
  turnsPlayed += 1;
  updateScore();
});

//const playerSelection = "rock";
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));