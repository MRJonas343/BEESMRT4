export interface HangmanGameState {
	currentRound: number;
	lives: number;
	guessedLetters: string[];
	currentWordProgress: string[];
	isRoundComplete: boolean;
	isGameOver: boolean;
	isGameWon: boolean;
}

export const createInitialGameState = (): HangmanGameState => ({
	currentRound: 0,
	lives: 5,
	guessedLetters: [],
	currentWordProgress: [],
	isRoundComplete: false,
	isGameOver: false,
	isGameWon: false,
});

export const initializeWordProgress = (word: string): string[] => {
	return word
		.toLowerCase()
		.split("")
		.map(() => "_");
};

export const checkLetterInWord = (letter: string, word: string): boolean => {
	return word.toLowerCase().includes(letter.toLowerCase());
};

export const updateWordProgress = (
	letter: string,
	word: string,
	currentProgress: string[],
): string[] => {
	const wordArray = word.toLowerCase().split("");
	const newProgress = [...currentProgress];

	wordArray.forEach((char, index) => {
		if (char === letter.toLowerCase()) {
			newProgress[index] = char;
		}
	});

	return newProgress;
};

export const isWordComplete = (wordProgress: string[]): boolean => {
	return !wordProgress.includes("_");
};

export const handleLetterGuess = (
	letter: string,
	currentWord: string,
	gameState: HangmanGameState,
): HangmanGameState => {
	if (gameState.guessedLetters.includes(letter.toLowerCase())) {
		return gameState; // Letter already guessed
	}

	const newGuessedLetters = [...gameState.guessedLetters, letter.toLowerCase()];
	const isCorrect = checkLetterInWord(letter, currentWord);

	let newLives = gameState.lives;
	let newWordProgress = [...gameState.currentWordProgress];

	if (isCorrect) {
		newWordProgress = updateWordProgress(
			letter,
			currentWord,
			gameState.currentWordProgress,
		);
	} else {
		newLives = Math.max(0, gameState.lives - 1);
	}

	const isRoundComplete = isWordComplete(newWordProgress);
	const isGameOver = newLives === 0;

	return {
		...gameState,
		guessedLetters: newGuessedLetters,
		lives: newLives,
		currentWordProgress: newWordProgress,
		isRoundComplete,
		isGameOver,
	};
};

export const handleWordGuess = (
	guessedWord: string,
	currentWord: string,
	gameState: HangmanGameState,
): HangmanGameState => {
	const isCorrect = guessedWord.toLowerCase() === currentWord.toLowerCase();

	if (isCorrect) {
		const newWordProgress = currentWord.toLowerCase().split("");
		return {
			...gameState,
			currentWordProgress: newWordProgress,
			isRoundComplete: true,
		};
	}
	const newLives = Math.max(0, gameState.lives - 1);
	return {
		...gameState,
		lives: newLives,
		isGameOver: newLives === 0,
	};
};

export const startNextRound = (
	newWord: string,
	gameState: HangmanGameState,
): HangmanGameState => {
	return {
		...gameState,
		currentRound: gameState.currentRound + 1,
		currentWordProgress: initializeWordProgress(newWord),
		isRoundComplete: false,
		guessedLetters: [], // Reset guessed letters for new round
	};
};

export const checkGameComplete = (
	currentRound: number,
	totalRounds: number,
	gameState: HangmanGameState,
): HangmanGameState => {
	const isGameWon = currentRound >= totalRounds && gameState.isRoundComplete;

	return {
		...gameState,
		isGameWon,
	};
};

export const getAlphabetButtons = (): string[] => {
	return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
};

export const getHangmanImage = (lives: number): string => {
	const imageIndex = 5 - lives; // 5 lives = hangman-0.svg, 0 lives = hangman-5.svg
	return `/src/assets/hangman-${Math.min(imageIndex, 6)}.svg`; // Ensure we don't exceed hangman-6.svg
};
