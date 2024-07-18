function getComputerChoice() {
    const choice = ["rock" , "paper", "scissors"]
    let value = Math.floor(Math.random() * 3)
    return choice[value]
}

function getHumanChoice() {
    return prompt("Enter your Choice: rock, paper, scissors")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both choose ${humanChoice}`);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log(`You lose! Computer choose ${computerChoice}`)
            return computerScore++
        }
        else if (computerChoice === "scissors") {
            console.log(`You won! Computer choose ${computerChoice}`)
            return humanScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log(`You lose! Computer choose ${computerChoice}`)
            return computerScore++
        }
        else if (computerChoice === "rock") {
            console.log(`You won! Computer choose ${computerChoice}`)
            return humanScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log(`You lose! Computer choose ${computerChoice}`)
            return computerScore++
        }
        else if (computerChoice === "paper") {
            console.log(`You won! Computer choose ${computerChoice}`)
            return humanScore++
        }
    }
}


let humanScore = 0
let computerScore = 0

function startGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }    
}


startGame(); 

if (humanScore > computerScore) {
    console.log("You won!")
}
else if (computerScore > humanScore) {
    console.log("Computer won")
}
else {
    console.log("Tie")
}

alert("Open console to see the Winner")