import type { Card } from "@/interfaces";
import type { Dispatch, SetStateAction } from "react";

export const handleAnswerSelection = (
	selectedAnswer: string,
	currentQuestion: Card | null,
	flippedCards: string[],
	setCards: Dispatch<SetStateAction<Card[]>>,
	setMatchedPairs: Dispatch<SetStateAction<number>>,
	setScore: Dispatch<SetStateAction<number>>,
	setFlippedCards: Dispatch<SetStateAction<string[]>>,
	setCurrentQuestion: Dispatch<SetStateAction<Card | null>>,
	setIsModalOpen: Dispatch<SetStateAction<boolean>>,
	setCanFlip: Dispatch<SetStateAction<boolean>>,
) => {
	if (!currentQuestion) return;

	if (selectedAnswer === currentQuestion.correctAnswer) {
		// Correct answer - mark cards as matched and increment score
		setCards((prev) =>
			prev.map((card) =>
				card.id === currentQuestion.id
					? { ...card, isMatched: true, isFlipped: true }
					: card,
			),
		);
		setMatchedPairs((prev) => prev + 1);
		setScore((prev) => prev + 10);
	} else {
		// Wrong answer - flip cards back
		setCards((prev) =>
			prev.map((card) =>
				flippedCards.includes(card.gameId)
					? { ...card, isFlipped: false }
					: card,
			),
		);
	}

	// Reset state
	setFlippedCards([]);
	setCurrentQuestion(null);
	setIsModalOpen(false);
	setCanFlip(true);
};
