function computerPlay() {
    switch (getRandomNumber(1, 3)) {
        case 1:
            return "Rock"
        case 2:
            return "Scissors"
        case 3:
            return "Paper"
        default:
            console.error("Something went wrong in the switch statement")
            break
    }
}

function playRound() {
    let playerSelection = prompt("Choose your pick")

    while (!checkInput(playerSelection)) {
        playerSelection = prompt("The choices are: Rock, Paper or Scissors...")
    }

    let computerSelection = computerPlay()

    playerSelection = formatSelection(playerSelection)

    switch (true) {
        case playerSelection === computerSelection:
            console.log("TIE!")
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
            console.log("PLAYER WINS, ROCK BEATS SCISSORS!")
            return "player"
        case playerSelection === "Rock" && computerSelection === "Paper":
            console.log("Computer WINS, PAPER BEATS ROCK!")
            return "computer"
        case playerSelection === "Scissors" && computerSelection === "Paper":
            console.log("PLAYER WINS, SCISSORS CUT PAPER!")
            return "player"
        case playerSelection === "Scissors" && computerSelection === "Rock":
            console.log("Computer WINS, ROCK BEATS SCISSORS!")
            return "computer"
        case playerSelection === "Paper" && computerSelection === "Rock":
            console.log("PLAYER WINS, PAPER TOPS ROCKS!")
            return "player"
        case playerSelection === "Paper" && computerSelection === "Scissors":
            console.log("Computer WINS, SCISSORS CUT PAPER!")
            return "computer"
    }

}

function game() {
    let playerScore = 0
    let computerScore = 0

    const roundOne = playRound()
    updateScore(roundOne)
    const roundTwo = playRound()
    updateScore(roundTwo)
    const roundThree = playRound()
    updateScore(roundThree)
    const roundFour = playRound()
    updateScore(roundFour)
    const roundFive = playRound()
    updateScore(roundFive)

    function updateScore(outcome) {
        if (outcome === "computer") computerScore++
        else if (outcome === "player") playerScore++
    }

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}

function formatSelection(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() +
        playerSelection.toLowerCase().slice(1)
}

function checkInput(input) {
    input = input.toLowerCase()
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        return false
    }

    return true
}