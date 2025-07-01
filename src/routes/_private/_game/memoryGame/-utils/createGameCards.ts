import type { Card, GameCardData } from "@/interfaces";

/**
 * Create pairs of cards for the memory game and shuffle them
 * @param levelData - The level data
 * @returns The game cards
 */
export const createGameCards = (levelData: GameCardData[]): Card[] => {
	const pairs: Card[] = [];
	for (const card of levelData) {
		pairs.push({
			...card,
			gameId: `${card.id}-a`,
			isFlipped: false,
			isMatched: false,
		});
		pairs.push({
			...card,
			gameId: `${card.id}-b`,
			isFlipped: false,
			isMatched: false,
		});
	}

	return pairs.sort(() => Math.random() - 0.5);
};
