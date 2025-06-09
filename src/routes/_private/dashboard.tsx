import { createFileRoute, redirect } from "@tanstack/react-router";
import { useLogOut } from "@/hooks/useLogOut";
import { Button } from "@heroui/react";
import { useSession } from "@/utils";

function RouteComponent() {
	const { data: session } = useSession();
	const { logOut } = useLogOut();

	return (
		<div>
			Hello {session?.user.email}
			<br />
			<Button onPress={() => logOut()}>Sign out</Button>
		</div>
	);
}

export const Route = createFileRoute("/_private/dashboard")({
	component: RouteComponent,
});
