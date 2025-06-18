import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "../_private/GameMenu";
import { AuthLayout, NavBarAuth } from "@/components";

export const Route = createFileRoute("/_public")({
	component: RouteComponent,
	beforeLoad: async ({ context: { user } }) => {
		if (user) {
			throw redirect({ to: GameMenuRoute.to });
		}
	},
});

function RouteComponent() {
	return (
		<AuthLayout>
			<NavBarAuth />
			<Outlet />
		</AuthLayout>
	);
}
