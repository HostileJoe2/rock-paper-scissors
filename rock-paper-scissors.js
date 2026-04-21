let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice () {
    let num = Math.floor(Math.random() * 100)
    computerChoice = "damnit"

    if (num <= 33) {
        computerChoice = "Rock"
    } else if (num <= 66) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice;    
}
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

const buttons = document.querySelectorAll("button");
const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");
const winner = document.querySelector(".winner");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        humanChoice = event.target.id;
        computerChoice = getComputerChoice();
        if (humanScore >= 5 || computerScore >= 5) return;
        playRound(computerChoice, humanChoice);
        yourScore.textContent = `Your score is ${humanScore}`;
        compScore.textContent = `The Computer's score is ${computerScore}`;
        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                winner.textContent = "You Win!"
            } else {winner.textContent = "The Computer Wins!"}
            button.disabled = true;
        } 
    });
});