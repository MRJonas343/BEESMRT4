import { createServerFn } from "@tanstack/react-start";
import { getHeader } from "@tanstack/react-start/server";
import type { Session } from "better-auth/types";

export const fetchSessionFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const res = await fetch(
			`${process.env.VITE_BEESMRT_API}/auth/api/auth/get-session`,
			{
				headers: {
					cookie: getHeader("cookie") || "",
				},
			},
		);

		if (!res.ok) {
			throw new Error("Not authenticated");
		}

		const session = (await res.json()) as Session;

		return session;
	},
);
