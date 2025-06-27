import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/_game/memoryGame/1vs1/$level")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_private/_game/memoryGame/_1vs1/1v1"!</div>;
}
