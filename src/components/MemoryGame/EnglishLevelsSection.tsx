import { Button } from "@heroui/react";

interface EnglishLevelsSectionProps {
	englishLevels: string[];
	selectedEnglishLevel: string | null;
	onLevelSelect: (level: string | null) => void;
}

export function EnglishLevelsSection({
	englishLevels,
	selectedEnglishLevel,
	onLevelSelect,
}: EnglishLevelsSectionProps) {
	return (
		<div className="mb-8">
			<h3 className="text-2xl font-bold text-yellow-300 mb-4">LEVEL</h3>
			<div className="flex flex-wrap gap-3 justify-center">
				{/* All Levels Button */}
				<Button
					className={`px-6 py-3 rounded-lg font-bold text-lg min-w-[80px] text-center transition-all ${
						selectedEnglishLevel === null
							? "bg-yellow-400 text-black"
							: "bg-white text-purple-800"
					}`}
					onPress={() => onLevelSelect(null)}
				>
					ALL
				</Button>

				{englishLevels.map((level) => (
					<Button
						key={level}
						className={`px-6 py-3 rounded-lg font-bold text-lg min-w-[80px] text-center transition-all ${
							selectedEnglishLevel === level
								? "bg-yellow-400 text-black"
								: "bg-white text-purple-800"
						}`}
						onPress={() => onLevelSelect(level)}
					>
						{level}
					</Button>
				))}
			</div>
		</div>
	);
}
