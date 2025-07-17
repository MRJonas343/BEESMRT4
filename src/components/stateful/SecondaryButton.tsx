import { Button, Link } from "@heroui/react";
import type { ReactNode } from "react";

interface SecondaryButtonProps {
	label: string;
	onPress?: () => void;
	icon?: ReactNode;
	className?: string;
	isLink?: boolean;
	href?: string;
}

export const SecondaryButton = ({
	label,
	onPress,
	icon,
	className,
	isLink,
	href,
}: SecondaryButtonProps) => {
	return (
		<Button
			className={`${className} text-lg font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-105 border-2 border-buzz `}
			variant="bordered"
			onPress={onPress}
			startContent={icon}
			radius="md"
			as={isLink ? Link : "button"}
			href={href}
		>
			{label}
		</Button>
	);
};
