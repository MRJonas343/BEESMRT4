import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { MemoryGameBoard } from "../-components/MemoryGameBoardSingle";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getGameLevelQueryOptions } from "@/utils";
import { Suspense } from "react";
import { Loader } from "@/components";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/memoryGame/single/$level",
	});

	const { data: levelData } = useSuspenseQuery(
		getGameLevelQueryOptions("MemoryGame", level),
	);

	return <MemoryGameBoard levelData={levelData} />;
}

export const Route = createFileRoute(
	"/_private/_game/memoryGame/single/$level",
)({
	component: () => (
		<Suspense fallback={<Loader />}>
			<RouteComponent />
		</Suspense>
	),
	loader: async ({ params: { level }, context: { queryClient } }) => {
		try {
			await queryClient.ensureQueryData(
				getGameLevelQueryOptions("MemoryGame", level),
			);
		} catch (error) {
			throw redirect({ to: GameMenuRoute.to });
		}
	},
});
