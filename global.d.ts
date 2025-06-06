import type { NavigateOptions, ToOptions } from "@tanstack/react-router";
import type { createRouter } from "@tanstack/react-router";

declare module "@react-types/shared" {
	interface RouterConfig {
		href: ToOptions["to"];
		routerOptions: Omit<NavigateOptions, keyof ToOptions>;
	}
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
