let humanScore = 0
let computerScore = 0


playGame(6)



//the computer gets it's choice from a random number between 1 and 100
function getComputerChoice () {

    let num = Math.floor(Math.random() * 100)
    let computerChoice = "damnit"

    if (num <= 33) {
        computerChoice = "Rock"
    } else if (num <= 66) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice;    
}

//promtps the player on page load to choose between the three
function getHumanChoice () {
    let humanChoice = prompt("Pick Rock, Paper, or Scissors")
    return humanChoice;
}

//this is the logic for how games are scored
function playRound (computerChoice, humanChoice) {
    mine = humanChoice.toLowerCase();
    theirs = computerChoice.toLowerCase();

    if (mine === 'rock' && theirs === 'scissors') {
        console.log("You win! Rock Beats Scissors")
        humanScore += 1
    } else if (mine === 'scissors' && theirs === 'paper') {
        console.log("You Win! Scissors beats Paper!")
        humanScore += 1
    } else if (mine === 'paper' && theirs == 'rock') {
        console.log("You Win! Paper beats Rock!")
        humanScore += 1
    } else if (mine === theirs) {
        console.log ("It's a draw!")
    } else {
        console.log("You Lose! " + theirs +" beats " + mine)
        computerScore += 1
    }
}

function playGame(timesToPlay) {
    for (i = 1; i < timesToPlay; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()

        playRound(computerChoice, humanChoice);

        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);

    }
}


