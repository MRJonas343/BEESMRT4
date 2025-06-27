import { Route as MemoryGameRouteSingle } from "@/routes/_private/_game/memoryGame/single/$level";
import { Route as MemoryGameRoute1vs1 } from "@/routes/_private/_game/memoryGame/1vs1/$level";
import { Route as HangmanGameRouteSingle } from "@/routes/_private/_game/hangmanGame/single/$level";
import { Route as HangmanGameRoute1vs1 } from "@/routes/_private/_game/hangmanGame/1vs1/$level";

// Route mapping for scalable game routing
const GAME_ROUTES = {
	MemoryGame: {
		SingleMode: MemoryGameRouteSingle,
		"1vs1": MemoryGameRoute1vs1,
	},
	HangmanGame: {
		SingleMode: HangmanGameRouteSingle,
		"1vs1": HangmanGameRoute1vs1,
	},
} as const;

export const getGameRoute = (game: string, mode: string) => {
	return (
		GAME_ROUTES[game as keyof typeof GAME_ROUTES]?.[
			mode as keyof (typeof GAME_ROUTES)[keyof typeof GAME_ROUTES]
		] ?? null
	);
};
