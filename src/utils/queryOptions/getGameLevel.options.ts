import { queryOptions } from "@tanstack/react-query";
import type { GameLevelType, GameName } from "@/interfaces";
import { getGameLevel } from "@/services";

export const getGameLevelQueryOptions = <T extends GameName>(
	game: T,
	level: string,
) =>
	queryOptions({
		queryKey: [`${game}:${level}`],
		queryFn: async (): Promise<GameLevelType<T>> => {
			const levelData = await getGameLevel(game, level);
			return levelData;
		},
	});
