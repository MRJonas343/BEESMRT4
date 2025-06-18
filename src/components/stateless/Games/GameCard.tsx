import type { games } from "@/constants";
import { Image } from "@heroui/react";
import { MainButton, Text } from "@/components";

export const GameCard = ({
	game,
	onPlay,
}: { game: (typeof games)[0]; onPlay: () => void }) => {
	const levelColors: Record<string, string> = {
		Beginner: "bg-yellow-100 text-yellow-700",
		Intermediate: "bg-orange-100 text-orange-700",
		Advanced: "bg-red-100 text-red-700",
	};

	return (
		<div className="flex flex-col md:flex-row rounded-2xl shadow-lg mb-8 overflow-hidden border border-yellow-200">
			<div className="flex items-center justify-center bg-background p-8 md:p-6 md:w-40">
				<Image
					src={game.image}
					alt={game.name}
					className=" w-16 h-16 md:w-24 md:h-24"
					radius="none"
				/>
			</div>
			<div className="flex-1 p-6 pt-4 md:pt-6 flex flex-col justify-center bg-white">
				<div className="flex items-center mb-2 space-x-2">
					<Text
						type="h3"
						className="font-bold text-black text-xl md:text-2xl font-['Oswald'] mb-0"
					>
						{game.name}
					</Text>
					<span className="flex items-center bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full">
						<span className="mr-1">★</span> {game.progress}/{game.total}
					</span>
					<span
						className={`bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full ${levelColors[game.level] || ""}`}
					>
						{game.level}
					</span>
				</div>
				<Text type="p" className="text-gray-700 mb-4 text-base">
					{game.description}
				</Text>
				<MainButton
					className="w-48 py-2 text-lg"
					onPress={onPlay}
					label="Play Now"
					icon={<div>▶️</div>}
				/>
			</div>
		</div>
	);
};
