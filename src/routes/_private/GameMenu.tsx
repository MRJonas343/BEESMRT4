import { createFileRoute } from "@tanstack/react-router";
import memoryGame from "../../assets/memoryGame.webp";
import hangmanGame from "../../assets/hangmanImg.webp";

import { useNavigate } from "@tanstack/react-router";

const games = [
	{
		name: "Memory Game",
		description: "A game of memory",
		game: "MemoryGame",
		image: memoryGame,
		link: "/game/configs/MemoryGame",
	},
	{
		name: "Hangman Game",
		description: "A game of hangman",
		game: "HangmanGame",
		image: hangmanGame,
		link: "/game/configs/HangmanGame",
	},
];

function RouteComponent() {
	const navigate = useNavigate();

	return <></>;
}

export const Route = createFileRoute("/_private/GameMenu")({
	component: RouteComponent,
});
