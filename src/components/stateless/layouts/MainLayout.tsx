import type { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 min-h-screen">
			{children}
		</main>
	);
};
