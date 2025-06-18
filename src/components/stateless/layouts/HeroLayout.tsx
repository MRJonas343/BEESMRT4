import type { ReactNode } from "react";

export const HeroLayout = ({ children }: { children: ReactNode }) => {
	return <main className="gradient-hero">{children}</main>;
};
