playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
computerSelection = computerPlay();

result = playRound(playerSelection, computerSelection);

//Gets a random item from choices (rock, paper, scissors) and returns it computerSelection
function computerPlay() {
    let options = Array("rock", "paper", "scissors");
    return options[Math.floor(Math.random()*options.length)];
}

//Takes in the playerSelection and computerSelection and returns the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie. Try again!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") ||       (playerSelection == "scissors" && computerSelection == "paper")) {
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("You lose. " + computerSelection + " beats " + playerSelection);
    }
}

// function game() {
//     for (let i = 0; i < 5; i++) {

//     }
// }