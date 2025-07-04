import type { HangmanGameLevel } from "./HangmanGameLevel.interface";
import type { MemoryGameLevel } from "./MemoryGameLevel.interface";

// Base interface for game level response
export interface GameLevelResponse<T> {
	trophies: number;
	isCompleted: boolean;
	level: string;
	data: T[];
}

// Original interfaces for backward compatibility
export interface GameLevelMap {
	MemoryGame: MemoryGameLevel[];
	HangmanGame: HangmanGameLevel[];
}

// New interfaces for the wrapped response
export interface GameLevelResponseMap {
	MemoryGame: GameLevelResponse<MemoryGameLevel>;
	HangmanGame: GameLevelResponse<HangmanGameLevel>;
}

export type GameName = keyof GameLevelMap;

// Updated to use the new response structure
export type GameLevelType<T extends GameName> = GameLevelResponseMap[T];

// Helper type to extract just the data array from the response
export type GameDataType<T extends GameName> = GameLevelMap[T];
