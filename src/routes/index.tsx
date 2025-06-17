import { createFileRoute } from "@tanstack/react-router";

import {
	FeatureSection,
	Footer,
	HeroNavbar,
	HeroSection,
	PricingSection,
	TestimonialsSection,
	VideoSection,
	WhyBeeSmrt,
} from "@/components";

function RouteComponent() {
	return (
		<main className="gradient-hero">
			<HeroNavbar />
			<section className="min-h-screen relative">
				<HeroSection />
				<WhyBeeSmrt />
				<FeatureSection />
				<VideoSection />
				<TestimonialsSection />
				<PricingSection />
				<Footer />
			</section>
		</main>
	);
}

export const Route = createFileRoute("/")({
	component: RouteComponent,
});
