const masterBoard = [{
	img: "https://i.imgur.com/Zblb1P7.png",
	name: '1',
}, {
	img: "https://i.imgur.com/iiDsBYW.png",
	name: '2',
}, {
	img: "https://i.imgur.com/EV0JquM.png",
	name: '3',
}, {
	img: "https://i.imgur.com/TgB5B2B.png",
	name: '4',
}, {
	img: "https://i.imgur.com/zl5UYXq.png",
	name: '5',
}, {
	img: "https://i.imgur.com/W0xutQL.png",
	name: '6',
}, {
	img: "https://i.imgur.com/sCSfheO.png",
	name: '7',
}, {
	img: "https://i.imgur.com/VIZuljR.png",
	name: '8',
}, {
	img: "https://i.imgur.com/TqC5BGP.png",
	name: '9',
}, {
	img: "https://i.imgur.com/PkHrzjz.png",
	name: '10',
}, {
	img: "https://i.imgur.com/OfI23KN.png",
	name: '11',
}, {
	img: "https://i.imgur.com/O02b0sM.png",
	name: '12',
}, {
	img: "https://i.imgur.com/Zblb1P7.png",
	name: '1',
}, {
	img: "https://i.imgur.com/iiDsBYW.png",
	name: '2',
}, {
	img: "https://i.imgur.com/EV0JquM.png",
	name: '3',
}, {
	img: "https://i.imgur.com/TgB5B2B.png",
	name: '4',
}, {
	img: "https://i.imgur.com/zl5UYXq.png",
	name: '5',
}, {
	img: "https://i.imgur.com/W0xutQL.png",
	name: '6',
}, {
	img: "https://i.imgur.com/sCSfheO.png",
	name: '7',
}, {
	img: "https://i.imgur.com/VIZuljR.png",
	name: '8',
}, {
	img: "https://i.imgur.com/TqC5BGP.png",
	name: '9',
}, {
	img: "https://i.imgur.com/PkHrzjz.png",
	name: '10',
}, {
	img: "https://i.imgur.com/OfI23KN.png",
	name: '11',
}, {
	img: "https://i.imgur.com/O02b0sM.png",
	name: '12',
}, ]
const grid = document.querySelector('.grid')
let board, cardGuess, correctGuesses;
document.querySelector('button').addEventListener('click', init);
document.querySelector('.grid').addEventListener('click', cardClicked);
init();
function init() {
	board = shuffleBoard();
	cardGuess = [];
	correctGuesses = [];
	createBoard();
}
function createBoard() {
	grid.innerHTML = "";
	document.getElementById('result').innerText = ""
	for (let i = 0; i < board.length; i++) {
		let cards = document.createElement('img')
		cards.setAttribute('src', 'https://i.imgur.com/RibM4vq.png')
		cards.setAttribute('data-id', i)
		grid.appendChild(cards)
	}
}
function cardClicked(evt) {
	let cardIdx = parseInt(evt.target.dataset.id);
	if (cardGuess.includes(cardIdx)) return;
	if (evt.target.tagName !== 'IMG') return;
	if (cardGuess.length < 2) {
		cardGuess.push(cardIdx);
		renderCard(cardIdx);
	}
	if (cardGuess.length === 2) checkMatch();
}
function renderCard(cardIdx) {
	let imageEls = document.querySelectorAll("img");
	imageEls[cardIdx].src = board[cardIdx].img;
}
function checkMatch() {
	if (board[cardGuess[0]].name === board[cardGuess[1]].name) {
		correctGuesses.push(cardGuess[0]);
		correctGuesses.push(cardGuess[1]);
	}
	setTimeout(renderBoard, 1500);
}
function renderBoard() {
	cardGuess = [];
	let imageEls = document.querySelectorAll('img');
	if (correctGuesses.length === 2) {
		document.getElementById('result').innerText = "Congratulations, You Won!"
	}
	imageEls.forEach(function(img, idx) {
		if (correctGuesses.includes(idx)) {
			imageEls[idx].src = board[idx].img;
			img.style.border = '5px solid lime';
			img.style.pointerEvents = 'none';
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