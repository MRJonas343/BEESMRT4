import { getGameLevelQueryOptions } from "@/utils";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSuspenseQuery } from "@tanstack/react-query";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/hangmanGame/single/$level",
	});

	const { data: levelData } = useSuspenseQuery(
		getGameLevelQueryOptions("HangmanGame", level),
	);

	return (
		<div>
			{levelData.map((level) => (
				<div key={level.id}>
					<h1>{level.word}</h1>
					<p>{level.hint}</p>
				</div>
			))}
		</div>
	);
}

export const Route = createFileRoute(
	"/_private/_game/hangmanGame/single/$level",
)({
	component: RouteComponent,
	loader: async ({ params: { level }, context: { queryClient } }) => {
		try {
			await queryClient.ensureQueryData(
				getGameLevelQueryOptions("HangmanGame", level),
			);
		} catch (error) {
			throw redirect({ to: GameMenuRoute.to });
		}
	},
});
