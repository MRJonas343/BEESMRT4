import { Button, Image } from "@heroui/react";
import { Text } from "@/components";
import singleModeImg from "@/assets/soltero.webp";
import oneVsOneImg from "@/assets/competencia.webp";
import onlineImg from "@/assets/tienda-online.webp";

interface GameModesSectionProps {
	gameModes: string[];
	selectedMode: string;
	onModeSelect: (mode: string) => void;
}

export function GameModesSection({
	gameModes,
	selectedMode,
	onModeSelect,
}: GameModesSectionProps) {
	const images = [singleModeImg, oneVsOneImg, onlineImg];

	return (
		<div className="mb-8">
			<Text type="h3" className="mb-4 text-2xl font-bold font-['Oswald']">
				Game Mode
			</Text>
			<div className="grid grid-cols-3 justify-items-center gap-3">
				{gameModes.map((mode, index) => {
					const imgSrc = images[index] || singleModeImg;
					const isActive = selectedMode === mode;
					return (
						<Button
							key={mode}
							className={`
							w-full h-24 flex flex-col items-center justify-center rounded-xl shadow-lg transition-all hover:scale-105
							md:w-full md:h-36
							${isActive ? "bg-yellow-400 text-black" : "bg-featured"}
							`}
							onPress={() => onModeSelect(mode)}
						>
							<Image
								src={imgSrc}
								alt={mode}
								radius="none"
								className="w-12 h-12 md:w-20 md:h-20 md:mb-1"
							/>
							<Text
								type="h3"
								className="mt-1 font-medium text-xs text-center md:text-base"
							>
								{mode
									.replace(/([A-Z])/g, " $1")
									.trim()
									.toUpperCase()}
							</Text>
						</Button>
					);
				})}
			</div>
		</div>
	);
}
