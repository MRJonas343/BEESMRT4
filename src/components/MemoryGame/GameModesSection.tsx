import { Button } from "@heroui/react";

interface GameModesSectionProps {
	gameModes: string[];
}

export function GameModesSection({ gameModes }: GameModesSectionProps) {
	return (
		<div className="mb-8">
			<h3 className="text-2xl font-bold text-yellow-300 mb-4">MODE</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{gameModes.map((mode, index) => (
					<Button
						key={mode}
						className={`
							p-6 rounded-lg text-center font-bold text-lg cursor-pointer transition-all hover:scale-105
							${index === 0 ? "bg-yellow-400 text-black" : "bg-white text-purple-800"}
						`}
						onPress={() => {
							console.log(mode);
						}}
					>
						{mode
							.replace(/([A-Z])/g, " $1")
							.trim()
							.toUpperCase()}
					</Button>
				))}
			</div>
		</div>
	);
}
