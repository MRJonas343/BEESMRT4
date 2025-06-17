import { MainButton } from "@/components/stateful/MainButton";

export const VideoSection = () => {
	return (
		<section id="demo" className="pt-20 pb-40 bg-background relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-3 mb-4">
						<span className="text-4xl">🎥</span>
						<h2 className="text-4xl md:text-5xl font-['Bebas_Neue'] font-bold text-gradient">
							Take a Quick Look
						</h2>
						<span className="text-4xl">🎥</span>
					</div>
					<p className="text-xl text-gray-900/80 max-w-2xl mx-auto font-['Oswald']">
						See BeeSmrt in action! Watch how our gamified approach makes
						learning English buzzing with excitement.
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative bg-gradient-to-br from-honey/20 to-amber/20 rounded-3xl p-4 md:p-8 shadow-2xl border border-border">
						{/* Video placeholder */}
						<div className="aspect-video bg-card rounded-2xl border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden">
							{/* Animated background */}
							<div className="absolute inset-0 bg-gradient-to-br from-nectar/30 to-golden/30" />

							{/* Content */}
							<div className="relative z-10 text-center px-4">
								<div className="text-6xl md:text-8xl mb-4 md:mb-6 bounce-gentle">
									🎬
								</div>
								<h3 className="text-xl md:text-2xl font-bebas font-bold text-foreground mb-3 md:mb-4">
									Coming Soon!
								</h3>
								<p className="text-base md:text-lg text-gray-900/80 mb-4 md:mb-6 max-w-md mx-auto font-['Oswald'] px-2">
									We're busy bees creating an amazing video showcase. Check back
									soon to see BeeSmrt in action!
								</p>
								<MainButton
									className="gradient-honey text-hive font-bebas font-semibold text-sm md:text-base"
									label="🔔 Notify Me When Ready"
									onPress={() => {}}
								/>
							</div>

							{/* Decorative elements */}
							<div className="absolute top-2 md:top-4 left-2 md:left-4 text-xl md:text-2xl wiggle opacity-50">
								🐝
							</div>
							<div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-xl md:text-2xl buzz opacity-50">
								🍯
							</div>
							<div className="absolute top-1/2 left-2 md:left-4 text-lg md:text-xl bounce-gentle opacity-30">
								✨
							</div>
							<div className="absolute top-1/4 right-4 md:right-8 text-lg md:text-xl wiggle opacity-30">
								🌸
							</div>
						</div>

						{/* Video stats */}
						<div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4 text-center">
							<div className="bg-card/50 rounded-xl p-3 md:p-4">
								<div className="text-xl md:text-2xl font-bebas font-bold text-honey">
									ssN2:30
								</div>
								<div className="text-xs md:text-sm text-gray-900/80 font-['Oswald']">
									Duration
								</div>
							</div>
							<div className="bg-card/50 rounded-xl p-3 md:p-4">
								<div className="text-xl md:text-2xl font-bebas font-bold text-buzz">
									4K
								</div>
								<div className="text-xs md:text-sm text-gray-900/80 font-['Oswald']">
									Quality
								</div>
							</div>
							<div className="bg-card/50 rounded-xl p-3 md:p-4">
								<div className="text-xl md:text-2xl font-bebas font-bold text-amber">
									🎮
								</div>
								<div className="text-xs md:text-sm text-gray-900/80 font-['Oswald']">
									Gameplay
								</div>
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
					<title>Wave transition to next section</title>
					<path
						d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
						fill="hsl(49, 100%, 93%)"
					/>
				</svg>
			</div>
		</section>
	);
};
