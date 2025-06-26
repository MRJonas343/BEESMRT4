import { CircularProgress } from "@heroui/react";

export const Loader = () => {
	const funnyMessages = [
		"Please wait, the bees are working...",
		"Buzzing through your request...",
		"The hive is processing...",
		"Our worker bees are on it!",
		"Honey, this will just take a moment...",
		"Bee patient, magic is happening!",
		"Creating something un-bee-lievable...",
	];

	const randomMessage =
		funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="relative">
				{/* Animated bee container */}
				<div className="relative mb-8">
					{/* Bee emoji with bounce animation */}
					<div className="text-6xl animate-bounce">🐝</div>

					{/* Flying path animation */}
					<div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
					<div className="absolute -bottom-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-300" />
				</div>

				{/* Circular progress with bee colors */}
				<div className="flex justify-center mb-6">
					<CircularProgress
						aria-label="Loading..."
						color="warning"
						size="lg"
						classNames={{
							svg: "w-16 h-16",
							indicator: "stroke-amber-800",
							track: "stroke-yellow-400",
						}}
					/>
				</div>
			</div>

			{/* Funny message */}
			<div className="text-center max-w-md px-4">
				<h2 className="text-2xl font-bold text-amber-800 mb-2 animate-pulse font-['Oswald']">
					{randomMessage}
				</h2>
				<p className="text-amber-600 font-['Oswald']">
					Our buzzing team is preparing something sweet for you!
				</p>
			</div>

			{/* Decorative honeycomb pattern */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
				<div className="absolute top-10 left-10 text-6xl text-amber-400 transform rotate-12 animate-spin-slow">
					⬡
				</div>
				<div className="absolute top-32 right-20 text-4xl text-yellow-400 transform -rotate-12 animate-spin-slow delay-1000">
					⬡
				</div>
				<div className="absolute bottom-20 left-20 text-5xl text-amber-300 transform rotate-45 animate-spin-slow delay-500">
					⬡
				</div>
				<div className="absolute bottom-32 right-16 text-3xl text-yellow-300 transform -rotate-45 animate-spin-slow delay-1500">
					⬡
				</div>
			</div>
		</div>
	);
};
