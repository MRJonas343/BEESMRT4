import { MainButton } from "@/components/stateful/MainButton";
import { Text } from "../Text";
import { WaveTransition } from "../WaveTransition";

export const VideoSection = () => {
	return (
		<section id="demo" className="pt-20 pb-40 bg-background relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-3 mb-4">
						<span className="text-4xl">🎥</span>
						<Text type="h2" className="text-gradient">
							Take a Quick Look
						</Text>
						<span className="text-4xl">🎥</span>
					</div>
					<Text type="p" className="max-w-2xl mx-auto">
						See BeeSmrt in action! Watch how our gamified approach makes
						learning English buzzing with excitement.
					</Text>
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
								<Text type="h3" className="mb-3 md:mb-4">
									Coming Soon!
								</Text>
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
								<Text type="h3" className="text-honey">
									2:30
								</Text>
								<Text type="span">Duration</Text>
							</div>
							<div className="bg-card/50 rounded-xl p-3 md:p-4">
								<Text type="h3" className="text-buzz">
									4K
								</Text>
								<Text type="span">Quality</Text>
							</div>
							<div className="bg-card/50 rounded-xl p-3 md:p-4">
								<Text type="h3" className="text-amber">
									🎮
								</Text>
								<Text type="span">Gameplay</Text>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WaveTransition fill="hsl(49, 100%, 93%)" />
		</section>
	);
};
