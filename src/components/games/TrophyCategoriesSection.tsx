import { Image } from "@heroui/react";
import beeImg from "@/assets/abeja-team.webp";
import type { LevelType } from "@/interfaces";

interface TrophyCategoriesSectionProps {
	filteredLevels: LevelType[];
	onLevelClick: (level: string) => void;
}

export function TrophyCategoriesSection({
	filteredLevels,
	onLevelClick,
}: TrophyCategoriesSectionProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{filteredLevels.length === 0 ? (
				<div className="col-span-full flex flex-col items-center justify-center text-center">
					<div className="text-lg font-['Oswald'] mb-2">
						The Bee team is working hard to bring you more levels.
					</div>
					<Image
						src={beeImg}
						alt="Bee"
						width={100}
						height={100}
						className="mx-auto mt-4"
					/>
				</div>
			) : (
				filteredLevels.map((level) => {
					return (
						<button
							key={level.levelName}
							type="button"
							className={`rounded-2xl shadow-md p-6 flex flex-col items-center h-56 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:opacity-90 cursor-pointer w-full relative ${
								level.isCompleted
									? "bg-green-100 border-2 border-green-500"
									: "bg-featured"
							}`}
							onClick={() => onLevelClick(level.level)}
						>
							{/* Checkmark for completed levels */}
							{level.isCompleted && (
								<div className="absolute top-2 right-2 text-green-600 text-xl">
									✅
								</div>
							)}

							<div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 mb-4">
								<span className="text-yellow-900 text-3xl">🏆</span>
							</div>

							<div className="font-semibold text-lg mb-2 font-['Oswald'] text-center min-h-[3.5rem] flex items-center justify-center">
								{level.levelName.replace(/([A-Z])/g, " $1").trim()}
							</div>
							<div className="flex-grow" />

							<div
								className={`text-xs font-bold px-4 py-1 rounded-full shadow ${
									level.isCompleted
										? "bg-gray-300 text-gray-600 line-through"
										: "bg-green-500 text-white"
								}`}
							>
								{level.trophies} XP
							</div>
						</button>
					);
				})
			)}
		</div>
	);
}
