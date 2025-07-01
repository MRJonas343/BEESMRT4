import type { KeyboardEvent } from "react";

export const handleCardKeyDown = (
	event: KeyboardEvent,
	gameId: string,
	onCardClick: (gameId: string) => void,
) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		onCardClick(gameId);
	}
};
