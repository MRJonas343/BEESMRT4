import type { Card } from "@/interfaces";
import type { Dispatch, SetStateAction } from "react";

export const handleCardClick = (
	gameId: string,
	cards: Card[],
	canFlip: boolean,
	setCards: Dispatch<SetStateAction<Card[]>>,
	setFlippedCards: Dispatch<SetStateAction<string[]>>,
) => {
	if (!canFlip) return;

	const card = cards.find((c) => c.gameId === gameId);
	if (!card || card.isFlipped || card.isMatched) return;

	setCards((prev) =>
		prev.map((c) => (c.gameId === gameId ? { ...c, isFlipped: true } : c)),
	);
	setFlippedCards((prev) => [...prev, gameId]);
};
