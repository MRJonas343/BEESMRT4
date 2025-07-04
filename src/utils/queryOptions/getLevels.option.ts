import { queryOptions } from "@tanstack/react-query";
import { getLevels } from "@/services";

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
