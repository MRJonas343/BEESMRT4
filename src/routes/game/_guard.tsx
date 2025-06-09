import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/game/_guard")({
	beforeLoad: async ({ context: { user } }) => {
		if (!user) {
			throw redirect({ to: "/login" });
		}
	},
});
