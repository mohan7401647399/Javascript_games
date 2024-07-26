const computerSelection = document.getElementById("com_selection"),
    userChoice = document.getElementById("user_selection"),
    userResult = document.getElementById("result"),
    AllSelections = document.querySelectorAll("button");

let userSelect;
let computer;
let result;

AllSelections.forEach(AllChoice => AllChoice.addEventListener("click", (item) => {
    userSelect = item.target.id
    userChoice.innerHTML = userSelect;
    computerGeneration();
    finalResult();
}))


function computerGeneration() {
    const randomNum = Math.floor(Math.random() * AllSelections.length) + 1;
    if (randomNum === 1) {
        computer = "rock"
    }
    if (randomNum === 2) {
        computer = "scissors"
    }
    if (randomNum === 3) {
        computer = "paper"
    }
    computerSelection.innerHTML = computer;
}

function finalResult() {
    if (computer === userSelect) {
        result = "Its a draw"
    }
    if (computer === "rock" && userSelect === "paper") {
        result = "you win"
    }
    if (computer === "rock" && userSelect === "scissors") {
        result = "you lost!!"
    }
    if (computer === "paper" && userSelect === "scissors") {
        result = "you win"
    }
    if (computer === "paper" && userSelect === "rock") {
        result = "you lost!!"
    }
    if (computer === "scissors" && userSelect === "rock") {
        result = "you win"
    }
    if (computer === "scissors" && userSelect === "paper") {
        result = "you lost!!"
    }
    userResult.innerHTML = result
}