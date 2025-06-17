import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";
import appCss from "../styles/app.css?url";
import { DefaultCatchBoundary, NotFound, Providers } from "@/components";
import { fetchSessionFn } from "@/utils/fetch-session";
//import { seo } from '~/utils/seo'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	user: Awaited<ReturnType<typeof fetchSessionFn>> | null;
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			// ...seo({
			//   title:
			//     'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
			//   description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
			// }),
		],

		links: [
			//{ rel: "stylesheet", href: appCss },
			// {
			// 	rel: "apple-touch-icon",
			// 	sizes: "180x180",
			// 	href: "/apple-touch-icon.png",
			// },
			// {
			// 	rel: "icon",
			// 	type: "image/png",
			// 	sizes: "32x32",
			// 	href: "/favicon-32x32.png",
			// },
			// {
			// 	rel: "icon",
			// 	type: "image/png",
			// 	sizes: "16x16",
			// 	href: "/favicon-16x16.png",
			// },
			// //{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			// { rel: "icon", href: "/favicon.ico" },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
	beforeLoad: async ({ context: { queryClient } }) => {
		try {
			const session = await queryClient.fetchQuery({
				queryKey: ["user"],
				queryFn: ({ signal }) => fetchSessionFn({ signal }),
			});

			return session;
		} catch (error) {
			console.error("Failed to fetch session:", error);

			return null;
		}
	},
});

function RootComponent() {
	return (
		<RootDocument>
			<Providers>
				<Outlet />
			</Providers>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackRouterDevtools position="bottom-right" />
				<ReactQueryDevtools
					initialIsOpen={false}
					buttonPosition="bottom-left"
				/>
				<Scripts />
			</body>
		</html>
	);
}
