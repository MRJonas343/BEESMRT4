import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_private/_game/memoryGame/single/$level",
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_private/_game/memoryGame/_single/single"!</div>;
}
