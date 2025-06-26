import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";
import { useSession } from "@/utils";

export function NotFound() {
	const { data } = useSession();
	const redirectTo = data?.user ? GameMenuRoute.to : "/";

	const funnyMessages = [
		"Oops! Even our scout bees couldn't find this page!",
		"This page has flown away to another hive!",
		"404: Page not found in our honeycomb!",
		"Buzz! This route doesn't exist in our garden!",
		"Our worker bees are confused... this path leads nowhere!",
		"Honey, this page is as lost as a bee in winter!",
		"Un-bee-lievable! This page has disappeared!",
	];

	const randomMessage =
		funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			{/* Main content container */}
			<div className="text-center max-w-2xl">
				{/* Large 404 with bee animation */}
				<div className="relative mb-8">
					<h1 className="text-9xl font-bold text-amber-800 font-['Oswald'] tracking-wider mb-4">
						4
						<span className="inline-block animate-bounce text-amber-600">
							🐝
						</span>
						4
					</h1>

					{/* Flying bees animation */}
					<div className="absolute top-0 left-1/4 animate-ping delay-500">
						<span className="text-2xl">🐝</span>
					</div>
					<div className="absolute top-8 right-1/4 animate-bounce delay-1000">
						<span className="text-xl">🐝</span>
					</div>
				</div>

				{/* Funny message */}
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-amber-800 mb-4 animate-pulse font-['Oswald']">
						{randomMessage}
					</h2>
					<p className="text-amber-700 text-lg font-['Oswald'] mb-2">
						Looks like you've wandered off the beaten path!
					</p>
					<p className="text-amber-600 font-['Oswald']">
						Don't worry, our guide bees will help you find your way back to the
						hive! 🍯
					</p>
				</div>

				{/* Action buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
					<Button
						onPress={() => window.history.back()}
						className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-['Oswald'] font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
						size="lg"
					>
						🔙 Fly Back
					</Button>
					<Link
						to={redirectTo}
						className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 px-8 py-3 rounded-full font-['Oswald'] font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
					>
						🏠 Return to Hive
					</Link>
				</div>

				{/* Decorative elements */}
				<div className="flex justify-center items-center gap-8 text-6xl animate-pulse">
					<span className="transform rotate-12">🌻</span>
					<span className="transform -rotate-12">🌼</span>
					<span className="transform rotate-12">🌺</span>
				</div>
			</div>

			{/* Background decorative honeycomb pattern */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
				<div className="absolute top-20 left-10 text-8xl text-amber-400 transform rotate-12 animate-spin-slow">
					⬡
				</div>
				<div className="absolute top-40 right-20 text-6xl text-yellow-400 transform -rotate-12 animate-spin-slow delay-1000">
					⬡
				</div>
				<div className="absolute bottom-40 left-20 text-7xl text-amber-300 transform rotate-45 animate-spin-slow delay-500">
					⬡
				</div>
				<div className="absolute bottom-20 right-16 text-5xl text-yellow-300 transform -rotate-45 animate-spin-slow delay-1500">
					⬡
				</div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-amber-200 rotate-45 animate-spin-slow delay-2000">
					⬡
				</div>
			</div>

			{/* Floating elements */}
			<div className="absolute top-1/4 left-1/4 animate-float delay-0">
				<span className="text-3xl">🍯</span>
			</div>
			<div className="absolute top-3/4 right-1/4 animate-float delay-1000">
				<span className="text-2xl">🌸</span>
			</div>
		</div>
	);
}
