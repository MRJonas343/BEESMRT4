import { MainButton, SecondaryButton } from "@/components";

export const PricingSection = () => {
	return (
		<section id="pricing" className="pt-14 pb-20 bg-background relative">
			<div className="container mx-auto px-4 pb-16">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-3 mb-4">
						<span className="text-4xl">💸</span>
						<h2 className="text-4xl md:text-5xl font-bebas font-bold text-gradient">
							Just Kidding, Everything's Free... for Now!
						</h2>
						<span className="text-4xl">💸</span>
					</div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="bg-featured rounded-3xl p-8 md:p-12 pb-16 md:pb-8 shadow-xl border border-border relative overflow-hidden">
						{/* Decorative elements */}
						<div className="absolute top-4 left-4 text-3xl bounce-gentle opacity-50">
							🎉
						</div>
						<div className="absolute top-4 right-4 text-3xl wiggle opacity-50">
							🆓
						</div>
						<div className="absolute bottom-4 left-4 text-2xl buzz opacity-30">
							💰
						</div>
						<div className="absolute bottom-4 right-4 text-2xl bounce-gentle opacity-30">
							🏫
						</div>

						<div className="relative z-10 text-center">
							<div className="text-6xl mb-6">🤑</div>

							<p className="text-lg md:text-xl leading-relaxed mb-8 font-['Oswald']">
								Don't worry, we believe in keeping the good stuff free forever.
								We're planning to introduce a
								<span className="font-bebas font-semibold text-buzz">
									{" "}
									premium subscription
								</span>{" "}
								for some extra fancy content, but everything you're enjoying now
								will remain
								<span className="font-bebas font-semibold text-buzz">
									{" "}
									absolutely free
								</span>
								.
							</p>

							<div className="bg-card rounded-2xl p-6 mb-8 border border-border">
								<p className="text-lg text-gray-900/80 font-['Oswald']">
									And hey, we're an educational platform at heart—if you're a
									<span className="font-bebas font-semibold text-amber">
										{" "}
										school
									</span>
									, hit us up! We've got some sweet deals just for you—because
									who doesn't love a good bargain?
									<span className="text-2xl ml-2">😉</span>
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-6 mb-8">
								<div className="bg-card/50 rounded-xl p-6 border border-border">
									<div className="text-3xl mb-3">🎮</div>
									<h3 className="font-['Oswald'] text-buzz font-semibold text-lg  mb-2">
										Forever Free
									</h3>
									<ul className="text-sm text-gray-900/80 font-['Oswald'] space-y-1">
										<li>✓ All current games & features</li>
										<li>✓ Global leaderboards</li>
										<li>✓ Profile customization</li>
										<li>✓ 1v1 competitions</li>
									</ul>
								</div>

								<div className="bg-card/50 rounded-xl p-6 border border-border">
									<div className="text-3xl mb-3">🏫</div>
									<h3 className="font-['Oswald'] text-buzz font-semibold text-lg mb-2">
										Schools & Education
									</h3>
									<ul className="text-sm text-gray-900/80 font-['Oswald'] space-y-1">
										<li>✓ Bulk student accounts</li>
										<li>✓ Teacher dashboard</li>
										<li>✓ Progress tracking</li>
										<li>✓ Custom curriculum</li>
									</ul>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-4 justify-center">
								<MainButton
									className="px-8"
									label="🎮 Start Playing for Free"
									onPress={() => {}}
								/>
								<SecondaryButton
									className="px-8"
									label="🏫 Contact for Schools"
									onPress={() => {}}
								/>
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
						fill="hsl(var(--hive))"
					/>
				</svg>
			</div>
		</section>
	);
};
