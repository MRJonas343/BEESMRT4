import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Suspense } from "react";
import { Loader } from "@/components";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { getGameLevelQueryOptions } from "@/utils";
import { HangmanGameBoardSingle } from "../-components";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/hangmanGame/single/$level",
	});

	const { data: levelResponse } = useSuspenseQuery(
		getGameLevelQueryOptions("HangmanGame", level),
	);

	return <HangmanGameBoardSingle key={level} levelResponse={levelResponse} />;
}

export const Route = createFileRoute(
	"/_private/_game/hangmanGame/single/$level",
)({
	component: () => (
		<Suspense fallback={<Loader />}>
			<RouteComponent />
		</Suspense>
	),
	loader: async ({ params: { level }, context: { queryClient } }) => {
		try {
			await queryClient.ensureQueryData(
				getGameLevelQueryOptions("HangmanGame", level),
			);
		} catch (_) {
			throw redirect({ to: GameMenuRoute.to });
		}
	},
});
