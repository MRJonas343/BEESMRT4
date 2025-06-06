import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { useRouter } from "@tanstack/react-router";

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<HeroUIProvider
			navigate={(to, options) => router.navigate({ to, ...options })}
			useHref={(to) => router.buildLocation({ to }).href}
		>
			<ToastProvider />

			{children}
		</HeroUIProvider>
	);
}
