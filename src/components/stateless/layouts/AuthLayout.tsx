import type { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="gradient-hero min-h-screen relative">{children}</main>
	);
};
