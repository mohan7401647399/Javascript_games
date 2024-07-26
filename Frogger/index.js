const timeLeft = document.querySelector("#time-left"),
    result = document.querySelector("#result"),
    startPauseBtn = document.querySelector("#start-pause-btn"),
    allSquares = document.querySelectorAll(".grid div"),
    logsLeft = document.querySelectorAll('.log-left'),
    logsRight = document.querySelectorAll('.log-right'),
    carsLeft = document.querySelectorAll('.car-left'),
    carsRight = document.querySelectorAll('.car-right'),
    width = 9
let curIndex = 76;
let timerId;
let currentTime = 20;
let OutcomeTimer;

const moveFrog = (e) => {
    // console.log("moved");
    allSquares[curIndex].classList.remove("frog");

    switch (e.key) {
        case "ArrowLeft":
            if (curIndex % width !== 0) curIndex -= 1
            // console.log((curIndex % width !== 0));
            // console.log(curIndex);
            break;
        case "ArrowRight":
            if (curIndex % width < width - 1) curIndex += 1
            // console.log((curIndex % width < width - 1));
            // console.log(curIndex);
            break;
        case "ArrowUp":
            if (curIndex - width >= 0) curIndex -= width
            // console.log((curIndex - width >= 0));
            // console.log(curIndex);
            break;
        case "ArrowDown":
            if (curIndex + width < width * width) curIndex += width
            // console.log((curIndex + width < width * width));
            // console.log(curIndex);
            break;
    }

    allSquares[curIndex].classList.add("frog");
}



function autoMoveElement() {
    currentTime--;
    timeLeft.textContent = currentTime;
    logsLeft.forEach(logLeft => moveLogLeft(logLeft));
    logsRight.forEach(logRight => moveLogRight(logRight));
    carsLeft.forEach(carLeft => moveCarLeft(carLeft));
    carsRight.forEach(carRight => moveCarRight(carRight));
}

function checkOutComes() {
    lose();
    win();
}

function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1")
            logLeft.classList.add("l2")
            break;
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2")
            logLeft.classList.add("l3")
            break;
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3")
            logLeft.classList.add("l4")
            break;
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4")
            logLeft.classList.add("l5")
            break;
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5")
            logLeft.classList.add("l1")
            break;
    }
}

function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains("l1"):
            logRight.classList.remove("l1")
            logRight.classList.add("l5")
            break;
        case logRight.classList.contains("l2"):
            logRight.classList.remove("l2")
            logRight.classList.add("l1")
            break;
        case logRight.classList.contains("l3"):
            logRight.classList.remove("l3")
            logRight.classList.add("l2")
            break;
        case logRight.classList.contains("l4"):
            logRight.classList.remove("l4")
            logRight.classList.add("l3")
            break;
        case logRight.classList.contains("l5"):
            logRight.classList.remove("l5")
            logRight.classList.add("l4")
            break;
    }
}


function moveCarLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1")
            carLeft.classList.add("c2")
            break;
        case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2")
            carLeft.classList.add("c3")
            break;
        case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3")
            carLeft.classList.add("c1")
            break;
    }
}


function moveCarRight(carRight) {
    switch (true) {
        case carRight.classList.contains("c1"):
            carRight.classList.remove("c1")
            carRight.classList.add("c3")
            break;
        case carRight.classList.contains("c2"):
            carRight.classList.remove("c2")
            carRight.classList.add("c1")
            break;
        case carRight.classList.contains("c3"):
            carRight.classList.remove("c3")
            carRight.classList.add("c2")
            break;
    }
}

function lose() {
    if (allSquares[curIndex].classList.contains("c1") ||
        allSquares[curIndex].classList.contains("l4") ||
        allSquares[curIndex].classList.contains("l5") ||
        currentTime <= 0
    ) {
        result.textContent = "You Lose!"
        clearInterval(timerId)
        clearInterval(OutcomeTimer)
        allSquares[curIndex].classList.remove("frog")
        document.removeEventListener("keyup", moveFrog)

    }
}

function win() {
    if (allSquares[curIndex].classList.contains("ending-block")) {
        result.textContent = "You Win!"
        clearInterval(timerId)
        clearInterval(OutcomeTimer)
        document.removeEventListener("keyup", moveFrog)
    }
}

startPauseBtn.addEventListener("click", () => {
    if (timerId) {
        clearInterval(timerId)
        clearInterval(OutcomeTimer)
        OutcomeTimer = null
        timerId = null
        document.removeEventListener("keyup", moveFrog);
    } else {
        timerId = setInterval(autoMoveElement, 1000);
        OutcomeTimer = setInterval(checkOutComes, 50)
        document.addEventListener("keyup", moveFrog);
    }
})
