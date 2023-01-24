

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

	}








// Space-Man:

// 1. Create an array of words for the game

// 2. Select a random word from the array

// 3. Create an empty array to store the guessed letters

// 4. Create a variable to store the number of remaining guesses

// 5. Create a variable to store whether the game is over

// 6. Function to check if the player has won

  // 6.5 Check if all letters in the word have been guessed


// 7. Function to check if the player has lost


// 8. Function to update the game status


// 9. Function to handle player's guess


// 10. Function to display the current word with unguessed letters replaced with underscores


// 11. Start the game

// 12. Get player's guess


// 13. Continue getting player's guess until game is over


// 14. The game is over and the player can no longer input guesses.



// ICEBOX:
// you could add some endgame interaction like play again
//  or show the word again
// some cool animation
