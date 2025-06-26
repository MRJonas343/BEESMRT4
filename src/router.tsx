import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { DefaultCatchBoundary, Loader, NotFound } from "./components";

export function createRouter() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 1000 * 60,
			},
		},
	});

	return routerWithQueryClient(
		createTanStackRouter({
			context: { queryClient, user: null },
			routeTree,
			defaultPreload: "intent",
			defaultErrorComponent: DefaultCatchBoundary,
			defaultNotFoundComponent: () => <NotFound />,
			scrollRestoration: true,
			defaultStructuralSharing: true,
			defaultPendingComponent: () => <Loader />,
		}),
		queryClient,
	);
}
