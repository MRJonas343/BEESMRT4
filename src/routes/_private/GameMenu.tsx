import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Text, GameCard } from "@/components";
import { games } from "@/constants";
import { Route as GameConfigRoute } from "./_game/configs/$game";

function RouteComponent() {
	const navigate = useNavigate();

	return (
		<>
			<Text
				type="h1"
				className="px-4 text-black text-center font-['Bebas_Neue'] text-5xl mb-2"
			>
				Choose <span className="text-buzz">Your Game</span> 🎮
			</Text>
			<Text type="p" className="px-4 text-lg text-center mb-10 text-yellow-900">
				Learning English has never been this fun!
			</Text>
			<div className="px-4">
				<div className="max-w-3xl mx-auto flex flex-col">
					{games.map((game) => (
						<GameCard
							key={game.name}
							game={game}
							onPlay={() =>
								navigate({
									to: GameConfigRoute.to,
									params: { game: game.href },
								})
							}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export const Route = createFileRoute("/_private/GameMenu")({
	component: RouteComponent,
});
