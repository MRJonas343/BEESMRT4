import dragAndDrop from "../assets/dragDropGame.webp";
import hangmanGame from "../assets/hangmanImg.webp";
import memoryGame from "../assets/memoryGame.webp";
import sentenceScramble from "../assets/scrambler.webp";

export const games = [
	{
		name: "Memory Game",
		description: "Match words and their meanings in this fun memory challenge.",
		image: memoryGame,
		href: "MemoryGame",
		level: "Beginner",
		progress: 3,
		total: 5,
	},
	{
		name: "Hangman",
		description:
			"Guess the word before the bee gets caught! Classic word-guessing fun.",
		image: hangmanGame,
		href: "HangmanGame",
		level: "Beginner",
		progress: 2,
		total: 5,
	},
	{
		name: "Drag and Drop",
		description:
			"Learn vocabulary by dragging words to their matching images or meanings.",
		image: dragAndDrop,
		href: "DragAndDrop",
		level: "Intermediate",
		progress: 0,
		total: 5,
	},
	{
		name: "Sentence Scramble",
		description:
			"Rebuild scrambled sentences to improve your grammar and structure.",
		image: sentenceScramble,
		href: "SentenceScramble",
		level: "Intermediate",
		progress: 4,
		total: 5,
	},
];
