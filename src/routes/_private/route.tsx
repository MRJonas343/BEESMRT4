import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { GamesNavbar } from "@/components";

export const Route = createFileRoute("/_private")({
	beforeLoad: async ({ context: { user } }) => {
		if (!user) {
			throw redirect({ to: "/login" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="gradient-hero min-h-screen overflow-x-hidden">
			<GamesNavbar />
			<Outlet />
		</section>
	);
}
