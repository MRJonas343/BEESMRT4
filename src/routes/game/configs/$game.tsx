import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSuspenseQuery } from "@tanstack/react-query";
import { GameModesList } from "@/constants";
import { gameQueryOptions } from "@/utils";

function RouteComponent() {
	const { game } = useParams({ from: "/game/configs/$game" });
	const { data } = useSuspenseQuery(gameQueryOptions(game));

	return (
		<div>
			<h1>Game Configs</h1>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h2>Game Modes</h2>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</div>
			</div>
		</div>
	);
}

export const Route = createFileRoute("/game/configs/$game")({
	component: RouteComponent,
	loader: async ({ params: { game }, context: { queryClient } }) => {
		const gameModes = GameModesList[game];

		if (!gameModes) throw redirect({ to: GameMenuRoute.to });

		queryClient.prefetchQuery(gameQueryOptions(game));
	},
});
