import { createFileRoute } from "@tanstack/react-router";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { Image } from "@heroui/react";
import memoryGame from "../../assets/memoryGame.webp";
import hangmanGame from "../../assets/hangmanImg.webp";
import { Text } from "@/components/stateless/Text";
import { useNavigate } from "@tanstack/react-router";

function RouteComponent() {
	const navigate = useNavigate();
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
			game: "hangman",
			image: hangmanGame,
			link: "/game/configs/hangman",
		},
	];

	return (
		<div className="flex flex-wrap gap-4">
			{games.map((game) => (
				<Card
					key={game.name}
					isPressable
					onPress={() => {
						navigate({
							to: game.link,
							params: { game: game.game },
						});
					}}
				>
					<CardBody>
						<Image src={game.image} alt={game.name} />
					</CardBody>
					<CardFooter>
						<Text type="p">{game.name}</Text>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}

export const Route = createFileRoute("/_private/GameMenu")({
	component: RouteComponent,
});
