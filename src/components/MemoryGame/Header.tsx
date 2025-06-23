import { Text } from "@/components";
import { games } from "@/constants";

interface HeaderProps {
	gameName: string;
}

export function Header({ gameName }: HeaderProps) {
	return (
		<Text type="h2" className="text-center py-4">
			{games.find((game) => game.href === gameName)?.name}
		</Text>
	);
}
