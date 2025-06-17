import { testimonials } from "@/constants";

export const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="py-20 pb-32 bg-featured relative">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center space-x-3 mb-4">
						<span className="text-4xl">💬</span>
						<h2 className="text-4xl md:text-5xl font-bebas font-bold text-gradient">
							What Our Users Say
						</h2>
						<span className="text-4xl">💬</span>
					</div>
					<p className="text-xl text-gray-900/80 max-w-2xl mx-auto font-['Oswald']">
						Don't just take our word for it - hear from our buzzing community of
						English learners!
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border relative overflow-hidden"
						>
							{/* Decorative honeycomb */}
							<div className="absolute top-0 right-0 w-12 h-12 bg-honey/10 honeycomb transform rotate-45 -translate-y-1 translate-x-1" />

							<div className="relative z-10">
								{/* User info */}
								<div className="flex items-center space-x-3 mb-4">
									<div className="text-4xl">{testimonial.avatar}</div>
									<div>
										<h3 className="font-['Oswald'] font-bold text-foreground">
											{testimonial.name}
										</h3>
										<p className="text-sm text-gray-900/80 font-['Oswald']">
											{testimonial.country}
										</p>
									</div>
								</div>

								{/* Rating */}
								<div className="flex space-x-1 mb-4">
									{[...Array(testimonial.rating)].map((_, index) => (
										<span
											key={`${testimonial.name}-star-${index}`}
											className="text-amber text-lg"
										>
											⭐
										</span>
									))}
								</div>

								{/* Testimonial text */}
								<p className="text-foreground leading-relaxed italic">
									"{testimonial.text}"
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Trust indicators */}
				<div className="mt-16 text-center">
					<div className="bg-card inline-flex items-center space-x-8 bg-card/80 rounded-full px-8 py-4 shadow-lg">
						<div className="flex items-center space-x-2">
							<span className="text-2xl">🏆</span>
							<span className="font-bebas font-semibold text-honey">
								10k+ Happy Learners
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<span className="text-2xl">⭐</span>
							<span className="font-bebas font-semibold text-buzz">
								4.9/5 Rating
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<span className="text-2xl">🌍</span>
							<span className="font-bebas font-semibold text-amber">
								50+ Countries
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Floating bees */}
			<div className="absolute top-20 left-10 text-2xl buzz opacity-20">🐝</div>
			<div className="absolute bottom-20 right-20 text-2xl wiggle opacity-20">
				🐝
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
