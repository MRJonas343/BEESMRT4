import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { DefaultCatchBoundary, NotFound, Providers } from "@/components";
import { fetchSessionFn } from "@/utils/fetch-session";
import { seo } from "@/utils/seo";
import appCss from "../styles/app.css?url";

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
			...seo({
				title: "BEESMRT | English Learning Game",
				description:
					"BEESMRT is a fun and engaging English learning game that helps you improve your English skills.",
				keywords: "english, learning, game, fun, engaging, improve, skills",
				image: "/BeeSMRT.webp",
			}),
		],

		links: [
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
			{ rel: "icon", href: "/BeeSMRT.webp" },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
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

function RootComponent() {
	return (
		<RootDocument>
			<Providers>
				<Outlet />
			</Providers>
		</RootDocument>
	);
}
