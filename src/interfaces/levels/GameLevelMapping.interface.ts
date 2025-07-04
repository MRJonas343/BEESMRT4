import type { HangmanGameLevel } from "./HangmanGameLevel.interface";
import type { MemoryGameLevel } from "./MemoryGameLevel.interface";

export interface GameLevelMap {
	MemoryGame: MemoryGameLevel[];
	HangmanGame: HangmanGameLevel[];
}

export type GameName = keyof GameLevelMap;

export type GameLevelType<T extends GameName> = GameLevelMap[T];
