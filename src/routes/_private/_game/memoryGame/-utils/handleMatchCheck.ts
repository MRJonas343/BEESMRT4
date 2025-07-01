import type { Card } from "@/interfaces";
import type { Dispatch, SetStateAction } from "react";

export const handleMatchCheck = (
	flippedCards: string[],
	cards: Card[],
	setCanFlip: Dispatch<SetStateAction<boolean>>,
	setCurrentQuestion: Dispatch<SetStateAction<Card | null>>,
	setIsModalOpen: Dispatch<SetStateAction<boolean>>,
	setCards: Dispatch<SetStateAction<Card[]>>,
	setFlippedCards: Dispatch<SetStateAction<string[]>>,
) => {
	if (flippedCards.length !== 2) return;

	setCanFlip(false);
	const [firstId, secondId] = flippedCards;
	const firstCard = cards.find((card) => card.gameId === firstId);
	const secondCard = cards.find((card) => card.gameId === secondId);

	if (firstCard && secondCard && firstCard.id === secondCard.id) {
		setCurrentQuestion(firstCard);
		setIsModalOpen(true);
		return;
	}

	setTimeout(() => {
		setCards((prev) =>
			prev.map((card) =>
				flippedCards.includes(card.gameId)
					? { ...card, isFlipped: false }
					: card,
			),
		);
		setFlippedCards([]);
		setCanFlip(true);
	}, 1000);
};
