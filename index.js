let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let i = 0;

const para = document.querySelector("p");


function play() {
    document.getElementById('rock').addEventListener('click', function () {
        user('rock');
    });
    document.getElementById('paper').addEventListener('click', function () {
        user('paper');
    });
    document.getElementById('scissors').addEventListener('click', function () {
        user('scissors');
    });
}

function user(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = (playRound(playerSelection, computerSelection));
    document.getElementById("2").textContent = "Computer's Selection: " + computerSelection;
    document.getElementById("3").textContent = "Player's Score: " + playerScore;
    document.getElementById("4").textContent = "Computer's Score: " + computerScore;
    document.getElementById("5").textContent = "Round Winner: " + roundWinner;

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "you tie"
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        roundWinner = "Player"
        return "you win";
    } else {
        computerScore++;
        roundWinner = "Computer"
        return "you lose";
    }

}


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }

}

play();