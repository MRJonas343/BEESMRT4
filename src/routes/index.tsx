import { Link } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<div className="font-bold text-4xl">Home Page, TODO</div>
			<Link href="/login">Login</Link>
		</section>
	);
}
