import type { MemoryGameLevel } from "./MemoryGameLevel.interface";
import type { HangmanGameLevel } from "./HangmanGameLevel.interface";

export interface GameLevelMap {
	MemoryGame: MemoryGameLevel[];
	HangmanGame: HangmanGameLevel[];
}

export type GameName = keyof GameLevelMap;

export type GameLevelType<T extends GameName> = GameLevelMap[T];
