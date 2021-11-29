const masterBoard = [
    {
        img: "https://i.imgur.com/Zblb1P7.png",
        name: '1',
    },
    {
        img: "https://i.imgur.com/iiDsBYW.png",
        name: '2',
    },
    {
        img: "https://i.imgur.com/EV0JquM.png",
        name: '3',
    },
    {
        img: "https://i.imgur.com/TgB5B2B.png",
        name: '4',
    },
    {
        img: "https://i.imgur.com/zl5UYXq.png",
        name: '5',
    },
    {
        img: "https://i.imgur.com/W0xutQL.png",
        name: '6',
    },
    {
        img: "https://i.imgur.com/sCSfheO.png",
        name: '7',
    },
    {
        img: "https://i.imgur.com/VIZuljR.png",
        name: '8',
    },
    {
        img: "https://i.imgur.com/TqC5BGP.png",
        name: '9',
    },
    {
        img: "https://i.imgur.com/PkHrzjz.png",
        name: '10',
    },
    {
        img: "https://i.imgur.com/OfI23KN.png",
        name: '11',
    },
    {
        img: "https://i.imgur.com/O02b0sM.png",
        name: '12',
    },
    {
        img: "https://i.imgur.com/Zblb1P7.png",
        name: '1',
    },
    {
        img: "https://i.imgur.com/iiDsBYW.png",
        name: '2',
    },
    {
        img: "https://i.imgur.com/EV0JquM.png",
        name: '3',
    },
    {
        img: "https://i.imgur.com/TgB5B2B.png",
        name: '4',
    },
    {
        img: "https://i.imgur.com/zl5UYXq.png",
        name: '5',
    },
    {
        img: "https://i.imgur.com/W0xutQL.png",
        name: '6',
    },
    {
        img: "https://i.imgur.com/sCSfheO.png",
        name: '7',
    },
    {
        img: "https://i.imgur.com/VIZuljR.png",
        name: '8',
    },
    {
        img: "https://i.imgur.com/TqC5BGP.png",
        name: '9',
    },
    {
        img: "https://i.imgur.com/PkHrzjz.png",
        name: '10',
    },
    {
        img: "https://i.imgur.com/OfI23KN.png",
        name: '11',
    },
    {
        img: "https://i.imgur.com/O02b0sM.png",
        name: '12',
    },
]
const grid = document.querySelector('.grid')
let lockBoard;
let boardGuess, cardGuess;
function init() {
    boardGuess = shuffleBoard();
    cardGuess = [];
    lockBoard = false;
    createBoard();
}
function createBoard() {
    for (let i = 0; i < boardGuess.length; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('src', 'https://i.imgur.com/RibM4vq.png')
        cards.setAttribute('data-id', i)
        grid.appendChild(cards)
    }
 }
 document.querySelector('.grid').addEventListener('click', cardClicked);
 function cardClicked(evt) {
    let imageElements = document.querySelectorAll('img')
    let cardIdx = parseInt(evt.target.dataset.id)
    imageElements[cardIdx].src = boardGuess[cardIdx].img
}
function cardClicked(evt) {
    let imageEls = document.querySelectorAll('img');
    let cardIdx = parseInt(evt.target.dataset.id);
    if (cardGuess.length < 2) {
        cardGuess.push(board[cardIdx].name);
    }
    if (cardGuess.length === 2) checkMatch();
    imageEls[cardIdx].src = board[cardIdx].img;
}
function checkMatch() {

}
function shuffleBoard() {
    let boardCopy = [...masterBoard];
    let newBoard = [];
    while (boardCopy.length) {
        let randomIdx = Math.floor(Math.random() * boardCopy.length)
        newBoard.push(boardCopy.splice(randomIdx, 1)[0])
    }
    return newBoard;
}
init();