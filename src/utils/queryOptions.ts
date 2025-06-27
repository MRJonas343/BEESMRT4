import { beesmartApi } from "@/axios";
import type { LevelType } from "@/interfaces";
import { queryOptions } from "@tanstack/react-query";

export const gameQueryOptions = (game: string, englishLevel?: string) =>
	queryOptions({
		queryKey: [game],
		queryFn: async () => {
			const levels = await beesmartApi.get<LevelType[]>(
				`/levels/getLevels/${game}`,
			);
			return levels.data;
		},
		select: (data) => {
			return englishLevel
				? data.filter((level) => level.englishLevel === englishLevel)
				: data;
		},
	});
