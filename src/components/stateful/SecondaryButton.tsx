import type { ReactNode } from "react";
import { Button } from "@heroui/react";

interface SecondaryButtonProps {
	label: string;
	onPress: () => void;
	icon?: ReactNode;
	className?: string;
}

export const SecondaryButton = ({
	label,
	onPress,
	icon,
	className,
}: SecondaryButtonProps) => {
	return (
		<Button
			className={`${className} text-lg font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-105 border-2 border-buzz `}
			variant="bordered"
			onPress={onPress}
			startContent={icon}
			radius="md"
		>
			{label}
		</Button>
	);
};
