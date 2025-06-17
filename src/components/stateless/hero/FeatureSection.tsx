import { features } from "@/constants";

export const FeatureSection = () => {
	return (
		<section id="features" className="pt-10 pb-40 bg-featured relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-3 mb-4">
						<span className="text-4xl">🍯</span>
						<h2 className="text-4xl md:text-5xl font-bebas font-bold text-gradient">
							DISCOVER THE HONEYCOMB
						</h2>
						<span className="text-4xl">🍯</span>
					</div>
					<p className="text-xl text-gray-900/80 max-w-2xl mx-auto font-['Oswald']">
						Explore our buzzing features designed to make your English learning
						journey sweet and effective!
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border overflow-hidden"
						>
							{/* Honeycomb background pattern */}
							<div className="absolute top-0 right-0 w-16 h-16 bg-honey/40 honeycomb transform rotate-12 -translate-y-2 translate-x-2" />

							<div className="relative z-10">
								<div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
									{feature.icon}
								</div>

								<h3 className="text-xl font-['Oswald'] font-semibold text-foreground mb-3 group-hover:text-honey transition-colors">
									{feature.title}
								</h3>

								<p className=" leading-relaxed font-['Oswald'] text-gray-900/80">
									{feature.description}
								</p>
							</div>

							{/* Hover effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-honey/5 to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
						</div>
					))}
				</div>

				{/* Decorative bees */}
				<div className="absolute top-10 left-10 text-3xl buzz opacity-30">
					🐝
				</div>
				<div className="absolute bottom-10 right-10 text-2xl wiggle opacity-30">
					🐝
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
						fill="hsl(var(--background))"
					/>
				</svg>
			</div>
		</section>
	);
};
