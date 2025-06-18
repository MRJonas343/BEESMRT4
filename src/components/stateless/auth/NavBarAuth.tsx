import {
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@heroui/react";
import logo from "../../../assets/logo_white.webp";
import { Route as LoginRoute } from "@/routes/_public/login";
import { Route as RegisterRoute } from "@/routes/_public/register";
import { Route as HomeRoute } from "@/routes/index";
import { MainButton } from "@/components/stateful/MainButton";
import { useLocation } from "@tanstack/react-router";

export const NavBarAuth = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === LoginRoute.to;

	return (
		<Navbar
			maxWidth="xl"
			className="bg-transparent"
			isBlurred={false}
			position="static"
		>
			<NavbarContent>
				<NavbarBrand>
					<Link href={HomeRoute.to}>
						<Image
							src={logo}
							alt="Logo"
							className="w-auto h-10 lg:h-14 cursor-pointer"
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<MainButton
						label={isLoginPage ? "Sign Up" : "Log In"}
						href={isLoginPage ? RegisterRoute.to : LoginRoute.to}
						isLink={true}
						className="lg:w-40 lg:h-12 lg:text-2xl"
					/>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
