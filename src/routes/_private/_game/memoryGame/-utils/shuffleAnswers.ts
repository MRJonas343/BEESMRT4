import type { Card } from "@/interfaces";

export const shuffleAnswers = (question: Card) => {
	const answers = [
		question.correctAnswer,
		question.incorrectAnswer1,
		question.incorrectAnswer2,
		question.incorrectAnswer3,
	];
	return answers.sort(() => Math.random() - 0.5);
};
