export interface MemoryGameLevel {
	id: number;
	imgSrc: string;
	question: string;
	correctAnswer: string;
	incorrectAnswer1: string;
	incorrectAnswer2: string;
	incorrectAnswer3: string;
	englishLevel: string;
}

export interface GameCardData {
	id: number;
	imgSrc: string;
	question: string;
	correctAnswer: string;
	incorrectAnswer1: string;
	incorrectAnswer2: string;
	incorrectAnswer3: string;
	englishLevel: string;
}

export interface Card extends GameCardData {
	gameId: string;
	isFlipped: boolean;
	isMatched: boolean;
}
