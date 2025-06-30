import { getLevels } from "@/services";
import { queryOptions } from "@tanstack/react-query";

export const getLevelsQueryOptions = (game: string, englishLevel?: string) =>
	queryOptions({
		queryKey: [game],
		queryFn: async () => {
			const levels = await getLevels(game);
			return levels;
		},
		select: (data) => {
			return englishLevel
				? data.filter((level) => level.englishLevel === englishLevel)
				: data;
		},
	});
