import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Suspense } from "react";
import { Loader } from "@/components";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { getGameLevelQueryOptions } from "@/utils";

function RouteComponent() {
	const { level } = useParams({
		from: "/_private/_game/hangmanGame/single/$level",
	});

	const { data: levelResponse } = useSuspenseQuery(
		getGameLevelQueryOptions("HangmanGame", level),
	);

	const {
		trophies,
		isCompleted,
		level: levelName,
		data: levelData,
	} = levelResponse;

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-2xl font-bold">Hangman Game - {levelName}</h1>
					<div className="text-right">
						<div className="text-sm text-blue-600">Trophies: {trophies}</div>
						{isCompleted && (
							<div className="text-sm text-green-600">✓ Completed</div>
						)}
					</div>
				</div>
			</div>

			<div className="grid gap-4">
				{levelData.map((level) => (
					<div key={level.id} className="border rounded-lg p-4">
						<h2 className="text-xl font-semibold mb-2">{level.word}</h2>
						<p className="text-gray-600">{level.hint}</p>
					</div>
				))}
			</div>
		</div>
	);
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
