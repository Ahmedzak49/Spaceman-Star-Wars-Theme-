

	/*----- constants -----*/
	const wordList = [""];


	/*----- state variables -----*/
	let word = "";
	let gameOver = false;

	/*----- cached elements  -----*/
	let guessedLetters = [];
	let remainingGuesses = 6;

	/*----- event listeners -----*/


	/*----- functions -----*/
	selectWord();
	handleGuess();
	checkGameStatus();
	checkWin();
	checkLose();


// Start the game
	selectWord();

// Function to select a random word from the word list
	function selectWord() {
		word = wordList[Math.floor(Math.random() * wordList.length)];
	}

// Function to handle player's guess
	function handleGuess(letter) {
		if (guessedLetters.includes(letter)) {
		alert('You already guessed that letter. Please try again.');
	} else {
		guessedLetters.push(letter);
		if (word.includes(letter)) {
			alert('Correct! The word contains the letter ' + letter);
		} else {
			alert('Incorrect. The word does not contain the letter ' + letter);
			remainingGuesses--;
		}
		checkGameStatus();
	}
}

// Function to check the game status
	function checkGameStatus() {
	if (checkWin()) {
	   alert('You wone!');
	   gameOver = true;
	} else if (checkLose()) {
	   alert('You lost. The word was ' + word);
	   gameOver = true;
	} else {
	   alert('Guess a letter. You have ' + remainingGuesses + ' remaining guesses.');
	}
}

// Function to check if the player has won
	function checkWin() {
		for (let i = 0; i < word.length; i++) {
			if(!guessedLetters.includes(word[i])) {
				return false;
			}
		}
		return true;
	}

// Function to check if the player has lost
	function checkLose() {
		if (remainingGuesses === 0) {
			return true;
		} else {
			return false;
		}
	}

// Start the game
selectWord();





// ICEBOX:
// you could add some endgame interaction like play again
//  or show the word again
// some cool animation
