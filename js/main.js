*----- constants -----*/
const wordChoice = [
    'sun',
    'ufo',
    'moon',
    'mars',
    'earth',
    'pluto',
    'venus',
    'saturn',
    'uranus',
    'jupiter',
    'mercury',
    'spaceman'
  ];
  const maxWrong = 6;
  const IMGS = [
    "img/spaceman.png/spaceman-0.jpg",
    "img/spaceman.png/spaceman-1.jpg",
    "img/spaceman.png/spaceman-2.jpg",
    "img/spaceman.png/spaceman-3.jpg",
    "img/spaceman.png/spaceman-4.jpg",
    "img/spaceman.png/spaceman-5.jpg",
    "img/spaceman.png/spaceman-6.jpg",
];
/*----- state variables -----*/
let answer = " ";
let mistakes = 0;
let wrongGuesses = [];
let wordStatus = null;
let gameStatus;
/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = [...document.getElementById('alphabet')];
const playButton =  document.getElementById('play');
const spaceman = document.querySelector('img');
/*----- event listeners -----*/
document.querySelector('section').addEventListner('click', handleClick)
playButton.addEventListener('click', handleClick)

  /*----- functions -----*/

function handleClick (evt) {
    const letter = evt.target.textContent
    if (gameStatus || evt.target.tagName !== "BUTTON" || wrongGuesses.includes(letter) || answer.includes(letter)) return;
    if (answer.includes(letter)) {
      secretWord.forEach((elm, idx) => {
       if (elm === letter) wordStatus[idx] = letter;
      })
    } else {
        wrongGuesses.push(letter);
    }
    render();
}

function innt() {
 answer = words[Math.floor(Math.random() * words.length)]
 wrongGuesses = [];
wordStatus = secretWord.map(ltr => '_')
gameStatus = null;
render ()
}

init()

function render () {
    guess.textContent = wordStatus.join("")
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
}
