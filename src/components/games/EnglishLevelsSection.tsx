import { Button } from "@heroui/react";
import { Text } from "@/components";

interface EnglishLevelsSectionProps {
	englishLevels: string[];
	selectedEnglishLevel: string;
	onLevelSelect: (level: string) => void;
}

export function EnglishLevelsSection({
	englishLevels,
	selectedEnglishLevel,
	onLevelSelect,
}: EnglishLevelsSectionProps) {
	return (
		<div className="mb-8">
			<Text type="h3" className="mb-4 text-2xl font-bold font-['Oswald']">
				English Level
			</Text>
			<div className="flex flex-wrap gap-3 justify-center">
				{englishLevels.map((level) => (
					<Button
						key={level}
						className={`${selectedEnglishLevel === level ? "bg-yellow-400 text-black" : "bg-featured"} min-w-[100px] md:min-w-[110px] max-w-[110px] h-12 font-bold text-xl font-['Oswald'] flex flex-col items-center justify-center rounded-xl shadow-lg transition-all hover:scale-105`}
						onPress={() => onLevelSelect(level)}
					>
						{level}
					</Button>
				))}
			</div>
		</div>
	);
}
