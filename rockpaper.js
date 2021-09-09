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
        return "draw";
    }
    else if (playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" || playerMove === "scissors" && computerMove === "paper") {
        let message = playerMove.toUpperCase() + " beats " + computerMove.toUpperCase();
        console.log(message + ". You win!");
        return "player";
    }
    else {
        let message = computerMove.toUpperCase() + " beats " + playerMove.toUpperCase();
        console.log(message + ". You lose!");
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

//const playerSelection = "rock";
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));