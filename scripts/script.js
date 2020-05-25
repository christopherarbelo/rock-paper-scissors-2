const scores = {
    player: 0,
    computer: 0,
    ties: 0,
    games: 0
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', chooseSelection))

function chooseSelection(e) {
    const PARENT_TYPE = e.target.parentNode.type
    let selection;

    // checking to see PARENT_TYPE as a basis
    // in selecting the textContent of the button
    if (PARENT_TYPE === "button") {
        selection = e.target.parentNode.children[1].textContent
    } else {
        selection = e.target.children[1].textContent
    }

    playRound(selection)
}

function computerPlay() {
    switch (getRandomNumber(1, 3)) {
        case 1:
            return "Rock"
        case 2:
            return "Scissor"
        case 3:
            return "Paper"
        default:
            console.error("Something went wrong in the switch statement")
            break
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()

    switch (true) {
        case playerSelection === computerSelection:
            updateScore("ties", "TIE!")
            break;
        case playerSelection === "Rock" && computerSelection === "Scissor":
            updateScore("player", "PLAYER WINS, ROCK BEATS SCISSOR!")
            break
        case playerSelection === "Rock" && computerSelection === "Paper":
            updateScore("computer", "Computer WINS, PAPER BEATS ROCK!")
            break
        case playerSelection === "Scissor" && computerSelection === "Paper":
            updateScore("player", "PLAYER WINS, SCISSOR CUT PAPER!")
            break
        case playerSelection === "Scissor" && computerSelection === "Rock":
            updateScore("computer", "Computer WINS, ROCK BEATS SCISSOR!")
            break
        case playerSelection === "Paper" && computerSelection === "Rock":
            updateScore("player", "PLAYER WINS, PAPER TOPS ROCKS!")
            break
        case playerSelection === "Paper" && computerSelection === "Scissor":
            updateScore("computer", "Computer WINS, SCISSOR CUT PAPER!")
            break
    }
}

function updateScore(winner, message) {
    const GAMES = document.querySelector("#games")
    const PLAYER_WINS = document.querySelector("#player-wins")
    const COMPUTER_WINS = document.querySelector("#computer-wins")
    const TIES = document.querySelector("#ties")
    const DISPLAY = document.querySelector("#display")
    const DISPLAY_MESSAGE = document.querySelector("#display p")

    scores[winner]++
    scores["games"]++

    GAMES.textContent = `Games: ${scores["games"]}`
    PLAYER_WINS.textContent = `Player Wins: ${scores["player"]}`
    COMPUTER_WINS.textContent = `Computer Wins: ${scores["computer"]}`
    TIES.textContent = `Ties: ${scores["ties"]}`

    if (scores["games"] < 5) {
        DISPLAY_MESSAGE.textContent = message
    } else {
        if (scores["computer"] > scores["player"]) {
            DISPLAY_MESSAGE.textContent = "Computer wins SERIES!"
        } else if (scores["computer"] < scores["player"]) {
            DISPLAY_MESSAGE.textContent = "Player wins SERIES!"
        } else {
            DISPLAY_MESSAGE.textContent = "Wow a tie!"
        }

        buttons.forEach(button => button.setAttribute("disabled", ""))
    }

    DISPLAY.style.cssText = "background: red;"

    DISPLAY.addEventListener("transitionend", () => {
        DISPLAY.style.background = "none";
    })
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}