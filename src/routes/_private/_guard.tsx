import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/_guard")({
	beforeLoad: async ({ context: { user } }) => {
		if (!user) {
			throw redirect({ to: "/login" });
		}
	},
});
