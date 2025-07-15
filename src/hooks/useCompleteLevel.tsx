import { useMutation } from "@tanstack/react-query";
import type { GameName } from "@/interfaces";
import { completeLevel } from "@/services/completeLevel.service";
import { toast } from "@/utils";

export const useCompleteLevel = () => {
	const mutation = useMutation({
		mutationFn: async ({ game, level }: { game: GameName; level: string }) => {
			const response = await completeLevel(game, level);
			return response;
		},
		onSuccess: () => {
			toast("Level completed", "You have completed the level", "success");
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return mutation;
};
