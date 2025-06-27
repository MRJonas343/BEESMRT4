import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/_game/hangmanGame/1vs1/$level")(
	{
		component: RouteComponent,
	},
);

function RouteComponent() {
	return <div>Hello "/_game/hangmanGame/1vs1/$level"!</div>;
}
