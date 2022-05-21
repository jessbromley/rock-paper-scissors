//Gets a random item from choices (rock, paper, scissors) and returns it computerSelection
function computerPlay() {
    let options = Array("rock", "paper", "scissors");
    return options[Math.floor(Math.random()*options.length)];
}

computerSelection = computerPlay();

// function playRound(playerSelection, computerSelection) {

// }

// function game() {
//     for (let i = 0; i < 5; i++) {

//     }
// }