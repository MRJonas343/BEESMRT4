import { beesmartApi } from "@/axios";
import type { LevelType } from "@/interfaces";
import { queryOptions } from "@tanstack/react-query";

export const gameQueryOptions = (game: string) =>
	queryOptions({
		queryKey: [`${game}`],
		queryFn: async () => {
			const levels = await beesmartApi.get<LevelType[]>(
				`/levels/getLevels/${game}`,
				{
					withCredentials: true,
				},
			);
			return levels.data;
		},
	});
