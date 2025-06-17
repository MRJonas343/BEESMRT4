export const WhyBeeSmrt = () => {
	return (
		<section className="pt-10 pb-36 bg-background relative font-['oswald']">
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-2 mb-4">
						<span className="text-4xl">🌟</span>
						<h2 className="text-4xl md:text-5xl font-['Bebas_Neue'] font-bold text-gradient">
							Why BeeSmrt Is Right for You
						</h2>
						<span className="text-4xl ">🌟</span>
					</div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden">
						{/* Decorative elements */}
						<div className="absolute top-4 right-4 text-3xl wiggle hidden sm:block">
							🐝
						</div>
						<div className="absolute bottom-4 left-4 text-2xl bounce-gentle">
							🍯
						</div>

						<p className="text-xl md:text-2xl  leading-relaxed text-center ">
							<span className="font-['Bebas_Neue'] text-honey">BeeSmrt</span>{" "}
							makes learning English fun and effective through
							<span className="font-semibold text-buzz"> engaging games</span>{" "}
							and
							<span className="font-semibold text-buzz">
								{" "}
								personalized experiences
							</span>
							. Stay motivated with{" "}
							<span className="font-semibold text-honey">rewards</span> and
							compete on
							<span className="font-semibold text-honey">
								{" "}
								global leaderboards
							</span>
							. Enjoy a tailored learning journey in a
							<span className="font-semibold text-buzz">
								{" "}
								secure and supportive environment
							</span>{" "}
							that helps you achieve your language goals.
						</p>

						<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
							<div className="flex flex-col items-center space-y-2">
								<div className="text-4xl">🎮</div>
								<span className="font-bebas font-semibold text-honey">
									Fun Games
								</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<div className="text-4xl">🏆</div>
								<span className="font-bebas font-semibold text-buzz">
									Compete
								</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<div className="text-4xl">🎯</div>
								<span className="font-bebas font-semibold text-amber">
									Personalized
								</span>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<div className="text-4xl">🔒</div>
								<span className="font-bebas font-semibold text-honey">
									Secure
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Wave transition to next section */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					viewBox="0 0 1200 200"
					preserveAspectRatio="none"
					className="w-full h-32"
				>
					<title>Wave transition to feature section</title>
					<path
						d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
						fill="hsl(49, 100%, 93%)"
					/>
				</svg>
			</div>
		</section>
	);
};
