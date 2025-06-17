import { useState } from "react";
import { Link } from "@heroui/react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/react";
import logo from "../../../assets/logo_white.webp";
import { Image } from "@heroui/react";
import { MainButton } from "@/components";
import { Route as LoginRoute } from "@/routes/_public/login";

const menuItems = [
	{
		label: "Features",
		href: "#features",
	},
	{
		label: "Demo",
		href: "#demo",
	},
	{
		label: "Reviews",
		href: "#testimonials",
	},
	{
		label: "Pricing",
		href: "#pricing",
	},
];

export const HeroNavbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			maxWidth="xl"
			onMenuOpenChange={setIsMenuOpen}
			className="bg-transparent"
			isBlurred={false}
			position="static"
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image src={logo} alt="Logo" className="w-auto h-10 lg:h-14" />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-6" justify="center">
				{menuItems.map((item) => (
					<NavbarItem key={item.label}>
						<Link
							href={item.href}
							color="foreground"
							className="font-['Bebas_Neue'] text-lg transition-colors duration-200 hover:text-yellow-400 lg:text-2xl"
						>
							{item.label}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<MainButton
						label="Start Playing"
						href={LoginRoute.to}
						isLink={true}
						className="lg:w-40 lg:h-12 lg:text-2xl"
					/>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="backdrop-blur-2xl bg-transparent">
				{menuItems.map((item) => (
					<NavbarMenuItem key={`${item.label}`}>
						<Link
							className="w-full font-['Bebas_Neue'] text-black text-2xl"
							href={item.href}
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};
