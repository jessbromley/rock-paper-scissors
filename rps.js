let playerScore = 0;
let computerScore = 0;

game();

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
        playerScore++;
        return ("You win this round! " + playerSelection + " beats " + computerSelection);
    }
    else {
        computerScore++;
        return ("You lose this round. " + computerSelection + " beats " + playerSelection);
    }
}

//Plays five rounds and console.logs the winner
function game() {
    for(let i = 0; i < 5; i++){
        player = prompt("Choose rock, paper, or scissors:").toLowerCase();
        computer = computerPlay();

        let result = playRound(player, computer);
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log ("You are the winner!");
    } else {
        console.log ("You lose. Try again.");
    }
}