import { createFileRoute, redirect, useParams } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSuspenseQuery } from "@tanstack/react-query";
import { GameModesList } from "@/constants";
import { gameQueryOptions } from "@/utils";
import { Suspense, useState } from "react";
import {
	Header,
	GameModesSection,
	EnglishLevelsSection,
	TrophyCategoriesSection,
} from "@/components/MemoryGame";

function RouteComponent() {
	const { game } = useParams({ from: "/_private/game/configs/$game" });
	const { data } = useSuspenseQuery(gameQueryOptions(game));
	const gameModes = GameModesList[game];

	const [selectedEnglishLevel, setSelectedEnglishLevel] = useState<
		string | null
	>(null);

	const englishLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

	const filteredData = selectedEnglishLevel
		? data.filter((level) => level.englishLevel === selectedEnglishLevel)
		: data;

	return (
		<>
			<Header gameName={game} />

			<div className="max-w-4xl mx-auto px-6 pb-8">
				<GameModesSection gameModes={gameModes} />

				<EnglishLevelsSection
					englishLevels={englishLevels}
					selectedEnglishLevel={selectedEnglishLevel}
					onLevelSelect={setSelectedEnglishLevel}
				/>

				<TrophyCategoriesSection
					filteredData={filteredData}
					selectedEnglishLevel={selectedEnglishLevel}
				/>
			</div>
		</>
	);
}

export const Route = createFileRoute("/_private/game/configs/$game")({
	component: () => (
		<Suspense fallback={<div>Loading...</div>}>
			<RouteComponent />
		</Suspense>
	),
	loader: async ({ params: { game }, context: { queryClient } }) => {
		const gameModes = GameModesList[game];

		if (!gameModes) throw redirect({ to: GameMenuRoute.to });

		queryClient.prefetchQuery(gameQueryOptions(game));
	},
	errorComponent: ({ error }) => {
		return <div>Ups, something went wrong, try again later</div>;
	},
});
