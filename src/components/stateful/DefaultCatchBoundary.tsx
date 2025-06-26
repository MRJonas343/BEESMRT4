import { Button } from "@heroui/react";
import {
	ErrorComponent,
	Link,
	rootRouteId,
	useMatch,
	useRouter,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
	const router = useRouter();
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	});

	const isDev = import.meta.env.VITE_ENV === "dev";

	const errorMessages = [
		"Oops! Our bees got a bit confused!",
		"Buzz! Something went wrong in the hive!",
		"Un-bee-lievable! An error occurred!",
		"Houston, we have a bee problem!",
		"The queen bee is not happy about this error!",
		"Our worker bees encountered a sticky situation!",
		"Honey, something's not right in the garden!",
	];

	const randomErrorMessage =
		errorMessages[Math.floor(Math.random() * errorMessages.length)];

	if (isDev) console.error(error);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			{/* Main content container */}
			<div className="text-center max-w-4xl">
				{/* Error icon with bee animation */}
				<div className="relative mb-8">
					<div className="text-8xl mb-4">
						<span className="inline-block animate-bounce text-red-500">⚠️</span>
						<span className="inline-block animate-bounce delay-300 text-amber-600">
							🐝
						</span>
						<span className="inline-block animate-bounce delay-600 text-red-500">
							⚠️
						</span>
					</div>

					{/* Flying confused bees */}
					<div className="absolute top-0 left-1/4 animate-ping delay-500">
						<span className="text-2xl">🐝</span>
					</div>
					<div className="absolute top-8 right-1/4 animate-bounce delay-1000">
						<span className="text-xl">😵‍💫</span>
					</div>
				</div>

				{/* Error message */}
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-red-600 mb-4 animate-pulse font-['Oswald']">
						{randomErrorMessage}
					</h1>
					<p className="text-amber-700 text-lg font-['Oswald'] mb-4">
						Don't worry, our tech-savvy bees are working on it!
					</p>
					{!isDev && (
						<p className="text-amber-600 font-['Oswald']">
							Please try again or buzz back to safety! 🍯
						</p>
					)}
				</div>

				{/* Development error display */}
				{isDev && (
					<div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
						<h3 className="text-lg font-bold text-red-700 mb-4 font-['Oswald']">
							🔧 Development Error Details:
						</h3>
						<div className="text-left">
							<ErrorComponent error={error} />
						</div>
					</div>
				)}

				{/* Action buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
					<Button
						onPress={() => {
							router.invalidate();
						}}
						className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-['Oswald'] font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
						size="lg"
					>
						🔄 Try Again
					</Button>
					{isRoot ? (
						<Link
							to="/"
							className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 px-8 py-3 rounded-full font-['Oswald'] font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
						>
							🏠 Return to Hive
						</Link>
					) : (
						<Link
							to="/"
							className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-['Oswald'] font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
							onClick={(e) => {
								e.preventDefault();
								window.history.back();
							}}
						>
							🔙 Fly Back
						</Link>
					)}
				</div>

				{/* Decorative stressed bees */}
				<div className="flex justify-center items-center gap-8 text-4xl animate-pulse">
					<span className="transform rotate-12">😰</span>
					<span className="transform -rotate-12">🐝</span>
					<span className="transform rotate-12">😵</span>
				</div>
			</div>

			{/* Background decorative honeycomb pattern - broken style */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
				<div className="absolute top-20 left-10 text-8xl text-red-400 transform rotate-45 animate-spin-slow">
					⬡
				</div>
				<div className="absolute top-40 right-20 text-6xl text-amber-400 transform -rotate-45 animate-spin-slow delay-1000">
					⬡
				</div>
				<div className="absolute bottom-40 left-20 text-7xl text-red-300 transform rotate-12 animate-spin-slow delay-500">
					⬡
				</div>
				<div className="absolute bottom-20 right-16 text-5xl text-amber-300 transform -rotate-12 animate-spin-slow delay-1500">
					⬡
				</div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-red-200 rotate-45 animate-spin-slow delay-2000">
					⬡
				</div>
			</div>

			{/* Floating error elements */}
			<div className="absolute top-1/4 left-1/4 animate-float delay-0">
				<span className="text-3xl">💥</span>
			</div>
			<div className="absolute top-3/4 right-1/4 animate-float delay-1000">
				<span className="text-2xl">🚨</span>
			</div>
			<div className="absolute top-1/3 right-1/3 animate-float delay-2000">
				<span className="text-2xl">⚡</span>
			</div>
		</div>
	);
}
