import { beesmartApi } from "@/axios";
import type { GameLevelType, GameName } from "@/interfaces";

export const getGameLevel = async <T extends GameName>(
	game: T,
	level: string,
): Promise<GameLevelType<T>> => {
	const levelData = await beesmartApi.get<GameLevelType<T>>(
		`levels/getLevel/${game}/${level}`,
	);
	return levelData.data;
};
