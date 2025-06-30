import { beesmartApi } from "@/axios";
import type { LevelType } from "@/interfaces";

export const getLevels = async (game: string) => {
	const levels = await beesmartApi.get<LevelType[]>(
		`/levels/getLevels/${game}`,
	);
	return levels.data;
};
