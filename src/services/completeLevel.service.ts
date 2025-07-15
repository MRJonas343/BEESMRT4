import { beesmartApi } from "@/axios";
import type { GameName } from "@/interfaces";

export const completeLevel = async (game: GameName, level: string) => {
	const response = await beesmartApi.post(
		`/levels/completeLevel/${game}/${level}`,
	);
	return response.data;
};
