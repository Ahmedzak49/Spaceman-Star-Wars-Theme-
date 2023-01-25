// *----- constants -----*/
const WORD_CHOICE = {
    names: [
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
    planets: [
        "Endor",
        "Naboo",
        "Coruscant",
        "Bespin",
        "Tatooine",
        "Cantonica"
    ],
    ships: [
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
/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = [...document.querySelectorAll('section > button')];
const playButton =  document.getElementById('playButton');
const spaceman = document.querySelector('img');
/*----- event listeners -----*/
document.querySelector('section').addEventListener('click', handleClick)
playButton.addEventListener('click', handleClick)

  /*----- functions -----*/

function handleClick (evt) {
    const letter = evt.target.textContent
    if (gameStatus || evt.target.tagName !== "BUTTON" || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
    if (answer.includes(letter)) {
        console.log('right answer')
        answer.forEach((elm, idx) => {
       if (elm === letter) wordStatus[idx] = letter;
      })
    } else {
        wrongGuesses.push(letter);
    }
    render();
}

function init() {
 answer = WORD_CHOICE[Math.floor(Math.random() * WORD_CHOICE.length)].split('')
 wrongGuesses = [];
 wordStatus = answer.map(ltr => ltr === " " ? " " : " _ ")
 gameStatus = null;
render ()
}

init()

function render () {
    guess.textContent = wordStatus.join("")
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
}
