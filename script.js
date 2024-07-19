function getRobotChoice() {
    const choice = ["rock" , "paper", "scissors","rock" , "paper", "scissors"]
    let value = Math.floor(Math.random() * 6)
    return choice[value]
}
function playRound(humanChoice, robotChoice) {
    document.getElementById("player-choice").textContent = humanChoice;
    document.getElementById("robot-choice").textContent = robotChoice;

    const roundStatus = document.getElementById("round-win");

    if (humanChoice === robotChoice) {
        roundStatus.textContent = "tie"
    }
    else if (humanChoice === "rock") {
        if (robotChoice === "paper") {
            roundStatus.textContent = "paper beats rock"
            console.log(`You lose! Computer choose ${robotChoice}`)
            robotScore++
        }
        else if (robotChoice === "scissors") {
            roundStatus.textContent = "rock beats scissors"
            console.log(`You won! Computer choose ${robotChoice}`)
            humanScore++
        }
    }
    else if (humanChoice === "paper") {
        if (robotChoice === "scissors") {
            roundStatus.textContent = "scissors beats paper"
            console.log(`You lose! Computer choose ${robotChoice}`)
            robotScore++
        }
        else if (robotChoice === "rock") {
            roundStatus.textContent = "paper beats rock"
            console.log(`You won! Computer choose ${robotChoice}`)
            humanScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (robotChoice === "rock") {
            roundStatus.textContent = "rock beats scissors"
            console.log(`You lose! Computer choose ${robotChoice}`)
            robotScore++
        }
        else if (robotChoice === "paper") {
            roundStatus.textContent = "scissors beats paper"
            console.log(`You won! Computer choose ${robotChoice}`)
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
        return playRound(rockBtn.id, getRobotChoice());
    }
})


const paperBtn = document.getElementById("paper");
paperBtn.addEventListener('click', () => {
    if (humanScore >= 5 || robotScore >= 5) {
        console.log("Game over");
        document.getElementById("round-win").textContent = "Game over"
    }
    else {
        return playRound(paperBtn.id, getRobotChoice());
    }
})


const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener('click', () => {
    if (humanScore >= 5 || robotScore >= 5) {
        console.log("Game over"); 
        document.getElementById("round-win").textContent = "Game over"  
    }
    else {
        return playRound(scissorsBtn.id, getRobotChoice());
    }
})

document.getElementById("restart").addEventListener('click', () => {
    humanScore = 0;
    robotScore = 0;
    document.getElementById("player-current-score").textContent = "0";
    document.getElementById("robot-current-score").textContent = "0";
    document.getElementById("round-win").textContent = "? Beats ?" 
    document.getElementById("player-choice").textContent = "?";
    document.getElementById("robot-choice").textContent = "?";
})