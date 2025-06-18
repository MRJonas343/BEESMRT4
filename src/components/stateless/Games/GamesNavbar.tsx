import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
} from "@heroui/react";
import logo from "../../../assets/logo_white.webp";
import { useSession } from "@/utils";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { Route as DashboardRoute } from "@/routes/_private/dashboard";
import { Text } from "../Text";
import { useLogOut } from "@/hooks/useLogOut";

export const GamesNavbar = () => {
	const { data: session } = useSession();
	const { logOut } = useLogOut();

	return (
		<Navbar
			maxWidth="xl"
			className="bg-transparent"
			isBlurred={false}
			position="static"
		>
			<NavbarContent>
				<NavbarBrand>
					<Link href={GameMenuRoute.to}>
						<Image
							src={logo}
							alt="Logo"
							className="w-auto h-10 lg:h-14 cursor-pointer"
						/>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="primary"
							name={session?.user?.name ?? ""}
							size="sm"
							src={session?.user?.image ?? ""}
						/>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Profile Actions"
						variant="flat"
						disabledKeys={["signed-in-as"]}
					>
						<DropdownItem
							as={"div"}
							key="signed-in-as"
							className="h-10 gap-2 text-red-300 opacity-100"
						>
							<Text type="span" className="text-medium font-semibold">
								Signed in as{" "}
							</Text>
							<Text type="span" className="font-semibold text-medium">
								{session?.user?.name ?? ""}
							</Text>
						</DropdownItem>
						<DropdownItem key="profile" href={DashboardRoute.to}>
							<Text type="span">🙍‍♂️ Profile</Text>
						</DropdownItem>
						<DropdownItem key="rankings">
							<Text type="span">🏆 Rankings</Text>
						</DropdownItem>
						<DropdownItem key="pro" className="">
							<Text type="span">💰 BEESMRT PRO</Text>
						</DropdownItem>
						<DropdownItem key="builder" className="">
							<Text type="span">🛠️ Builder</Text>
						</DropdownItem>
						<DropdownItem key="help" className="">
							<Text type="span">💬 Help & Feedback</Text>
						</DropdownItem>
						<DropdownItem
							key="logout"
							color="danger"
							onPress={() => {
								logOut();
							}}
						>
							<Text className="text-red-600 font-medium" type="span">
								🚩 Log Out
							</Text>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};
