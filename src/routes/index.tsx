import { createFileRoute } from "@tanstack/react-router";

import {
	FeatureSection,
	Footer,
	HeroLayout,
	HeroNavbar,
	HeroSection,
	PricingSection,
	TestimonialsSection,
	VideoSection,
	WhyBeeSmrt,
} from "@/components";

function RouteComponent() {
	return (
		<HeroLayout>
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
		</HeroLayout>
	);
}

export const Route = createFileRoute("/")({
	component: RouteComponent,
});
