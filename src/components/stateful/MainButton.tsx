import type { ReactNode } from "react";
import { Button } from "@heroui/react";

interface MainButtonProps {
	label: string;
	onPress: () => void;
	icon?: ReactNode;
	className?: string;
}

export const MainButton = ({
	label,
	onPress,
	icon,
	className,
}: MainButtonProps) => {
	return (
		<Button
			className={`${className} gradient-honey text-lg font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-105 `}
			variant="shadow"
			onPress={onPress}
			startContent={icon}
			radius="md"
		>
			{label}
		</Button>
	);
};
