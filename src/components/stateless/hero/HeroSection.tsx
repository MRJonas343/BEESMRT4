import { MainButton } from "@/components/stateful/MainButton";
import { IoLogoGameControllerB } from "react-icons/io";
import { Route as LoginRoute } from "@/routes/_public/login";
import { Text } from "../Text";
import { WaveTransition } from "../WaveTransition";

export const HeroSection = () => {
	return (
		<section className="relative">
			{/* Floating honeycomb decorations */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Base honeycombs - visible on all screens */}
				<div className="absolute top-20 left-10 w-16 h-16 lg:w-24 lg:h-24 bg-honey/30 honeycomb animate-pulse" />
				<div className="absolute top-40 right-20 w-12 h-12 lg:w-20 lg:h-20 bg-amber/35 honeycomb animate-pulse delay-1000" />
				<div className="absolute bottom-32 left-32 w-20 h-20 lg:w-28 lg:h-28 bg-golden/30 honeycomb animate-pulse delay-2000" />
				<div className="absolute bottom-20 right-10 w-14 h-14 lg:w-20 lg:h-20 bg-buzz/25 honeycomb animate-pulse delay-500" />

				{/* Additional honeycombs - visible only on larger screens */}
				<div className="hidden lg:block absolute top-[15%] left-[15%] w-20 h-20 bg-honey/25 honeycomb animate-pulse delay-1500" />
				<div className="hidden lg:block absolute top-[30%] right-[30%] w-24 h-24 bg-amber/30 honeycomb animate-pulse delay-3000" />
				<div className="hidden lg:block absolute bottom-[25%] right-[25%] w-28 h-28 bg-golden/25 honeycomb animate-pulse delay-2500" />

				{/* Extra large honeycombs - visible only on xl screens */}
				<div className="hidden xl:block absolute top-[45%] left-[10%] w-36 h-36 bg-honey/20 honeycomb animate-pulse delay-2200" />
				<div className="hidden xl:block absolute top-[10%] right-[10%] w-32 h-32 bg-amber/25 honeycomb animate-pulse delay-4000" />
				<div className="hidden xl:block absolute bottom-[10%] left-[45%] w-40 h-40 bg-golden/20 honeycomb animate-pulse delay-2800" />
			</div>

			<div className="container mx-auto px-4 py-20 relative z-10 max-w-7xl">
				<div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[80vh] max-w-7xl mx-auto">
					<div className="text-center lg:text-left">
						<Text type="h1" className="text-black">
							Learn English with
							<span className="text-gradient block">BeeSmrt!</span>
						</Text>

						<p className="text-xl md:text-2xl text-gray-900/80 text-hive/80 mb-8 leading-relaxed font-['Oswald']">
							Immerse yourself in an engaging English learning experience with
							our web app, and enjoy the journey to mastering the English
							language.
						</p>

						<MainButton
							icon={
								<IoLogoGameControllerB
									size={32}
									className="mr-1 lg:text-4xl xl:text-5xl"
								/>
							}
							isLink={true}
							href={LoginRoute.to}
							label="Start Playing"
							className="lg:w-48 lg:h-14 lg:text-2xl"
						/>

						<div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-hive/60">
							<div className="flex items-center space-x-2">
								<span className="text-2xl lg:text-3xl xl:text-4xl hover:scale-125 hover:rotate-12 transition-all duration-300">
									🎯
								</span>
								<Text type="span" className="font-medium">
									Gamified Learning
								</Text>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-2xl lg:text-3xl xl:text-4xl hover:scale-125 hover:rotate-12 transition-all duration-300">
									🎲
								</span>
								<Text type="span" className="font-medium">
									Variety of Games
								</Text>
							</div>
						</div>
					</div>

					<div className="relative flex justify-center lg:justify-end">
						<div className="relative">
							{/* Main bee character */}
							<div className="text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] bounce-gentle">
								🐝
							</div>

							{/* Floating elements around the bee */}
							<div className="absolute -top-8 -right-8 text-4xl lg:text-5xl xl:text-6xl wiggle">
								🌸
							</div>
							<div className="absolute -bottom-4 -left-8 text-3xl lg:text-4xl xl:text-5xl wiggle delay-1000">
								🍯
							</div>
							<div className="absolute top-1/2 -right-12 text-2xl lg:text-3xl xl:text-4xl buzz">
								✨
							</div>

							{/* Buzzing trail effect */}
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<div className="w-4 h-4 bg-honey rounded-full animate-ping" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<WaveTransition fill="hsl(var(--background))" />
		</section>
	);
};
