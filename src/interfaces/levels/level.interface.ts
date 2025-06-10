export interface LevelType {
	levelName: string;
	trophies: number;
	isCompleted: boolean;
	level: string;
	englishLevel: EnglishLevel;
}

export enum EnglishLevel {
	A1 = "A1",
	A2 = "A2",
	B1 = "B1",
	B2 = "B2",
	C1 = "C1",
	C2 = "C2",
}

export const EnglishLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];
