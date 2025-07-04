import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Suspense } from "react";
import { Loader } from "@/components";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { getGameLevelQueryOptions } from "@/utils";
import { MemoryGameBoard } from "../-components/MemoryGameBoardSingle";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/memoryGame/single/$level",
	});

	const { data: levelResponse } = useSuspenseQuery(
		getGameLevelQueryOptions("MemoryGame", level),
	);

	return <MemoryGameBoard levelResponse={levelResponse} />;
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
		} catch (_) {
			throw redirect({ to: GameMenuRoute.to });
		}
	},
});
