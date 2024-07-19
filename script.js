function getComputerChoice() {
    const choice = ["rock" , "paper", "scissors","rock" , "paper", "scissors"]
    let value = Math.floor(Math.random() * 6)
    return choice[value]
}
function playRound(humanChoice, computerChoice) {
    document.getElementById("player-choice").textContent = humanChoice;
    document.getElementById("robot-choice").textContent = computerChoice;

    const roundStatus = document.getElementById("round-win");

    if (humanChoice === computerChoice) {
        roundStatus.textContent = "tie"
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            roundStatus.textContent = "paper beats rock"
            console.log(`You lose! Computer choose ${computerChoice}`)
            robotScore++
        }
        else if (computerChoice === "scissors") {
            roundStatus.textContent = "rock beats scissors"
            console.log(`You won! Computer choose ${computerChoice}`)
            humanScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            roundStatus.textContent = "scissors beats paper"
            console.log(`You lose! Computer choose ${computerChoice}`)
            robotScore++
        }
        else if (computerChoice === "rock") {
            roundStatus.textContent = "paper beats rock"
            console.log(`You won! Computer choose ${computerChoice}`)
            humanScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            roundStatus.textContent = "rock beats scissors"
            console.log(`You lose! Computer choose ${computerChoice}`)
            robotScore++
        }
        else if (computerChoice === "paper") {
            roundStatus.textContent = "paper beats rock"
            console.log(`You won! Computer choose ${computerChoice}`)
            humanScore++
        }
    }
    document.getElementById("player-current-score").textContent = humanScore;
    document.getElementById("robot-current-score").textContent = robotScore;
    if (humanScore == 5) {
        document.getElementById("round-win").textContent = "you win!"
        return 1
    }
    else if (robotScore == 5) {
        document.getElementById("round-win").textContent = "Robot win!"
        return 1
    }
}


let humanScore = 0
let robotScore = 0


const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', () => {
    if (humanScore >= 5 || robotScore >= 5) {
        console.log("Game over");
        document.getElementById("round-win").textContent = "Game over"
    }
    else {
        return playRound(rockBtn.id, getComputerChoice());
    }
})


const paperBtn = document.getElementById("paper");
paperBtn.addEventListener('click', () => {
    if (humanScore >= 5 || robotScore >= 5) {
        console.log("Game over");
        document.getElementById("round-win").textContent = "Game over"
    }
    else {
        return playRound(rockBtn.id, getComputerChoice());
    }
})


const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener('click', () => {
    if (humanScore >= 5 || robotScore >= 5) {
        console.log("Game over"); 
        document.getElementById("round-win").textContent = "Game over"  
    }
    else {
        return playRound(rockBtn.id, getComputerChoice());
    }
})

document.getElementById("restart").addEventListener('click', () => {
    humanScore = 0;
    robotScore = 0;
    document.getElementById("player-current-score").textContent = "0";
    document.getElementById("robot-current-score").textContent = "0";
    document.getElementById("round-win").textContent = "? Beats ?" 
})