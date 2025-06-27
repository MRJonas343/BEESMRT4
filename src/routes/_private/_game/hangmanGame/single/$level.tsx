import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_private/_game/hangmanGame/single/$level",
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_game/hangmanGame/singleMode/hangmanGame"!</div>;
}
