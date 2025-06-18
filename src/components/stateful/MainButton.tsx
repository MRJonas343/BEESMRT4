import type { ReactNode } from "react";
import { Button, Link } from "@heroui/react";

interface MainButtonProps {
	label: string;
	onPress?: () => void;
	icon?: ReactNode;
	className?: string;
	isLink?: boolean;
	href?: string;
	isLoading?: boolean;
	radius?: "sm" | "md" | "lg" | "full";
	type?: "button" | "submit" | "reset";
}

export const MainButton = ({
	label,
	onPress,
	icon,
	className,
	isLink,
	href,
	isLoading,
	radius = "md",
	type = "button",
}: MainButtonProps) => {
	return (
		<Button
			as={isLink ? Link : "button"}
			href={href}
			className={`gradient-honey text-lg font-normal font-['Bebas_Neue'] transition-transform duration-200 hover:scale-105 ${className}`}
			variant="shadow"
			onPress={onPress}
			startContent={icon}
			radius={radius}
			isLoading={isLoading}
			type={type}
		>
			{label}
		</Button>
	);
};
