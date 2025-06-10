import type { LevelType } from "@/interfaces";

interface TrophyCategoriesSectionProps {
	filteredData: LevelType[];
	selectedEnglishLevel: string | null;
}

export function TrophyCategoriesSection({
	filteredData,
	selectedEnglishLevel,
}: TrophyCategoriesSectionProps) {
	return (
		<>
			{/* Selected Level Indicator */}
			{selectedEnglishLevel && (
				<div className="text-center mb-6">
					<p className="text-yellow-300 text-lg">
						Showing levels for:{" "}
						<span className="font-bold">{selectedEnglishLevel}</span>
					</p>
				</div>
			)}

			{/* Trophy Categories Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredData.length === 0 ? (
					<div className="col-span-full text-center text-gray-300 text-lg">
						No levels found for the selected English level
					</div>
				) : (
					filteredData.map((level) => {
						const isCompleted = level.isCompleted;

						return (
							<div
								key={level.levelName}
								className="text-center group cursor-pointer transition-all hover:scale-105"
							>
								{/* Trophy Icon */}
								<div className="mb-4 flex justify-center">
									<div
										className={`
										w-20 h-20 rounded-lg flex items-center justify-center text-4xl
										${isCompleted ? "bg-gray-500" : "bg-yellow-500"}
									`}
									>
										🏆
									</div>
								</div>

								{/* Category Name */}
								<h4
									className={`
									text-lg font-bold mb-2 uppercase tracking-wide relative
									${isCompleted ? "text-gray-400" : "text-white"}
								`}
								>
									{isCompleted && (
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-full h-0.5 bg-gray-400" />
										</div>
									)}
									<span className={isCompleted ? "bg-purple-700 px-2" : ""}>
										{level.levelName.replace(/([A-Z])/g, " $1").trim()}
									</span>
								</h4>

								{/* Trophy Count */}
								<div
									className={`
									text-2xl font-bold
									${isCompleted ? "text-gray-400" : "text-yellow-300"}
								`}
								>
									{level.trophies}
								</div>

								{/* English Level Badge */}
								<div className="mt-2">
									<span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
										{level.englishLevel}
									</span>
								</div>
							</div>
						);
					})
				)}
			</div>
		</>
	);
}
