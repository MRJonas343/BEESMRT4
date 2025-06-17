import type { ReactNode } from "react";
import { Button, Link } from "@heroui/react";

interface MainButtonProps {
	label: string;
	onPress?: () => void;
	icon?: ReactNode;
	className?: string;
	isLink?: boolean;
	href?: string;
}

export const MainButton = ({
	label,
	onPress,
	icon,
	className,
	isLink,
	href,
}: MainButtonProps) => {
	return (
		<Button
			as={isLink ? Link : "button"}
			href={href}
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
