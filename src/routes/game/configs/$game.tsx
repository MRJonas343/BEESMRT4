import { GameModesList } from "@/constants";
import {
	createFileRoute,
	redirect,
	useLoaderData,
} from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";

function RouteComponent() {
	const { gameModes } = useLoaderData({ from: "/game/configs/$game" });
	return (
		<div>
			<h1>Game Configs</h1>
			<p>Game: {gameModes}</p>
		</div>
	);
}

export const Route = createFileRoute("/game/configs/$game")({
	component: RouteComponent,
	loader: async ({ params: { game } }) => {
		const gameModes = GameModesList[game];

		if (!gameModes) throw redirect({ to: GameMenuRoute.to });

		return { gameModes };
	},
});
