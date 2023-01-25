// *----- constants -----*/
const WORD_CHOICE = {
    Names: [
        "Mace Windu",
        "Scout Trooper",
        "Anakin Skywalker",
        "Strom Trooper",
        "Jabba The Hutt",
        "Obiwan Kenobi ",
        "Rey",
        "Yoda",
        "Chewbacca",
        "Luke Skywalker",
        "Darth Vador",
        "Han Solo",
    ],
    Planets: [
        "Endor",
        "Naboo",
        "Coruscant",
        "Bespin",
        "Tatooine",
        "Cantonica"
    ],
    Ships: [
        "Death Star",
        "Executor",
        "Home One",
        "Imperial Shuttle",
        "Millennium Falcon",
        "Star Destroyer",
    ],
};
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
let catagories = false;
/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = [...document.querySelectorAll('section > button')];
const playButton =  document.getElementById('playButton');
const spaceman = document.querySelector('img');
const catButton = document.querySelector('.catBtns');
/*----- event listeners -----*/
document.querySelector('section').addEventListener('click', handleClick)
playButton.addEventListener('click', init)

catButton.addEventListener('click', handleCatagorie)

  /*----- functions -----*/

  function handleCatagorie(evt) {
    catagories = evt.target.textContent
console.log(WORD_CHOICE[catagories]);
console.log(evt.target);
    answer = WORD_CHOICE[catagories][Math.floor(Math.random() * WORD_CHOICE[catagories].length)].split('')
    wordStatus = answer.map(ltr => ltr === " " ? " " : " _ ")
    render();
  }

function handleClick (evt) {
    const letter = evt.target.textContent
    if (gameStatus || evt.target.tagName !== "BUTTON" || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
    if (answer.join('').toLowerCase().includes(letter)) {
        console.log('right answer')
        answer.forEach((elm, idx) => {
       if (elm.toLowerCase() === letter) wordStatus[idx] = elm;
      })
      if (answer.join('') === wordStatus.join('')) {
        gameStatus = 'W';
      }
    } else {
        wrongGuesses.push(letter);
        if (wrongGuesses.length === 6) {
            gameStatus = 'L'
        }
    }
    render();
}

function init() {
 wrongGuesses = [];
 gameStatus = null;
 wordStatus = null;
 catagories = null;
render ()

}

init()

function render () {
    document.querySelector('section').style.visibility = catagories ? 'visible': 'hidden';
    document.querySelector('.catBtns').style.visibility = catagories ? 'hidden' : 'visible';
    guess.textContent = wordStatus ? wordStatus.join("") : ''
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
    renderMessage();
    playButton.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function renderMessage() {
    if (gameStatus === 'W') {
        message.textContent = 'You Win!!!'
    } else if (gameStatus === 'L'){
        message.textContent = 'You Lose!'
    } else {
        message.textContent = ''
    }
}
