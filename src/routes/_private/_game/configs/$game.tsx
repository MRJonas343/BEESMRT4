import {
	createFileRoute,
	redirect,
	useNavigate,
	useParams,
} from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSuspenseQuery } from "@tanstack/react-query";
import { GameModesList } from "@/constants";
import { gameQueryOptions } from "@/utils";
import { Suspense, useState } from "react";
import { EnglishLevels } from "@/interfaces";
import {
	Loader,
	Header,
	GameModesSection,
	EnglishLevelsSection,
	TrophyCategoriesSection,
} from "@/components";
import { getGameRoute } from "@/utils/gameRouting";

function RouteComponent() {
	const { game } = useParams({ from: "/_private/_game/configs/$game" });
	const navigate = useNavigate();
	const gameModes = GameModesList[game];

	const [selectedMode, setSelectedMode] = useState(gameModes[0]);
	const [selectedEnglishLevel, setSelectedEnglishLevel] = useState("A1");

	const { data: filteredLevels } = useSuspenseQuery(
		gameQueryOptions(game, selectedEnglishLevel),
	);

	const redirectToLevel = (level: string) => {
		const route = getGameRoute(game, selectedMode);

		if (route) navigate({ to: route.to, params: { level } });
	};

	return (
		<>
			<Header gameName={game} />

			<div className="max-w-3xl mx-auto px-6 pb-8	">
				<GameModesSection
					gameModes={gameModes}
					selectedMode={selectedMode}
					onModeSelect={setSelectedMode}
				/>

				<EnglishLevelsSection
					englishLevels={EnglishLevels}
					selectedEnglishLevel={selectedEnglishLevel}
					onLevelSelect={setSelectedEnglishLevel}
				/>

				<TrophyCategoriesSection
					filteredLevels={filteredLevels}
					onLevelClick={redirectToLevel}
				/>
			</div>
		</>
	);
}

export const Route = createFileRoute("/_private/_game/configs/$game")({
	component: () => (
		<Suspense fallback={<Loader />}>
			<RouteComponent />
		</Suspense>
	),
	loader: async ({ params: { game }, context: { queryClient } }) => {
		const gameModes = GameModesList[game];

		if (!gameModes) throw redirect({ to: GameMenuRoute.to });

		queryClient.prefetchQuery(gameQueryOptions(game));
	},
});
