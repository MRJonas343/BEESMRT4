import { getGameLevelQueryOptions } from "@/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { Suspense } from "react";
import { Loader } from "@/components";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/memoryGame/single/$level",
	});

	const { data: levelData } = useSuspenseQuery(
		getGameLevelQueryOptions("MemoryGame", level),
	);

	return (
		<div>
			{levelData.map((level) => (
				<div key={level.id}>
					<h1>{level.question}</h1>
					<img src={level.imgSrc} alt={level.question} />
				</div>
			))}
		</div>
	);
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
