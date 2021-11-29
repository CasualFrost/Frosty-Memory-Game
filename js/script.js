const masterBoard = [{
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
// let lockBoard;
let board, cardGuess, correctGuesses;

function init() {
    board = shuffleBoard();
    cardGuess = [];
    correctGuesses = [];
    // lockBoard = false;
    createBoard();
}

function createBoard() {
    grid.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
        let cards = document.createElement('img')
        cards.setAttribute('src', 'https://i.imgur.com/RibM4vq.png')
        cards.setAttribute('data-id', i)
        grid.appendChild(cards)
    }
}
document.querySelector('button').addEventListener('click', init);
document.querySelector('.grid').addEventListener('click', cardClicked);
//  function cardClicked(evt) {
//     let imageElements = document.querySelectorAll('img')
//     let cardIdx = parseInt(evt.target.dataset.id)
//     imageElements[cardIdx].src = board[cardIdx].img
// }
// function cardClicked(evt) {
//     let imageEls = document.querySelectorAll('img');
//     let cardIdx = parseInt(evt.target.dataset.id);
//     if (cardGuess.length < 2) {
//         cardGuess.push(board[cardIdx].name);
//     }
//     if (cardGuess.length === 2) checkMatch();
//     imageEls[cardIdx].src = board[cardIdx].img;
// }
function cardClicked(evt) {
    // find index from evt.target
    let cardIdx = parseInt(evt.target.dataset.id);

    // if length of cardGuess array is less than 2, add the index to cardGuess
    // then render that card over on the DOM with a renderCard function that accepts an index number as an argument and flips the correct card
    if (cardGuess.length < 2) {
        cardGuess.push(cardIdx);
        renderCard(cardIdx);
    }

    // if user has made two guesses (cardGuess.length === 2), check for match in separate function
    if (cardGuess.length === 2) checkMatch();

}

// accepts cardIdx as argument
function renderCard(cardIdx) {
    // select all img elements from DOM with querySelectorAll
    let imageEls = document.querySelectorAll("img");

    // use cardIdx to set source of img to url from board array at that index
    imageEls[cardIdx].src = board[cardIdx].img;
}

// using the indexes in cardGuess, look at that index in the board array
// and figure out if there is a match
function checkMatch() {
    // if there is a match
    if (board[cardGuess[0]].name === board[cardGuess[1]].name) {
    // add current guesses to correct guesses array
        correctGuesses.push(cardGuess[0]);
        correctGuesses.push(cardGuess[1]);   
    // reset cardGuess back to empty array
       cardGuess = [];
       // if no match, just reset cardGuess back to empty array
    } else {
       cardGuess = [];
    }
    // re-render the whole board to show correct guesses after 1.5 seconds
    // use setTimeout to call a separate renderBoard function
    setTimeout(renderBoard, 1500);
    // renderBoard();
}
// should render the whole board to show what cards have been correctly guessed
function renderBoard() {
    // select all img elements from DOM with querySelectorAll
    let imageEls = document.querySelectorAll('img');
    // using forEach, iterate over all image elements
    imageEls.forEach(function(img, idx) {
        // if the index of the image element is in the correctGuesses array
        if (correctGuesses.includes(idx)) {
            // show the snowflake like we did in renderCard
            imageEls[idx].src = board[idx].img;
            // add border (or something) to show it has been correctly guessed
            img.style.border = '5px solid lime';
            // if idx is not in correctGuesses, show the front of the card
        } else {
            imageEls[idx].setAttribute('src', 'https://i.imgur.com/RibM4vq.png')
        }
    })

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