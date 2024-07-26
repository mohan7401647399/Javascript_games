const cardArray = [
    {
        name: "cheeseburger",
        img: '/images/cheeseburger.png'
    },
    {
        name: "fries",
        img: '/images/fries.png'
    },
    {
        name: "hotdog",
        img: '/images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: '/images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '/images/milkshake.png'
    },
    {
        name: "pizza",
        img: '/images/pizza.png'
    },
    {
        name: "cheeseburger",
        img: '/images/cheeseburger.png'
    },
    {
        name: "fries",
        img: '/images/fries.png'
    },
    {
        name: "hotdog",
        img: '/images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: '/images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '/images/milkshake.png'
    },
    {
        name: "pizza",
        img: '/images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray.sort(() => 0.5 - Math.random()));

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardChosen = [];
let cardChosedId = [];
const cardWon = [];

function createBox() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", '/images/blank.png')
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card);
    }
}
createBox();

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const cardOne = cardChosedId[0];
    const cardTwo = cardChosedId[1];

    if (cardOne == cardTwo) {
        cards[cardOne].setAttribute('src', 'images/blank.png');
        cards[cardTwo].setAttribute('src', 'images/blank.png');
        alert("You have clicked the same image!")
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert("Your found a match one");
        cards[cardOne].setAttribute('src', 'images/white.png');
        cards[cardTwo].setAttribute('src', 'images/white.png');
        cards[cardOne].removeEventListener("click", flipCard);
        cards[cardTwo].removeEventListener("click", flipCard);
        cardWon.push(cardChosen);
    } else {
        cards[cardOne].setAttribute('src', 'images/blank.png');
        cards[cardTwo].setAttribute('src', 'images/blank.png');
        alert("So Sorry Please try again!")
    }
    resultDisplay.textContent = cardWon.length;

    cardChosen = [];
    cardChosedId = [];

    if (cardWon.length == cardArray.length / 2) {
        resultDisplay.textContent = "Congrats you found them all!"
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosedId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}