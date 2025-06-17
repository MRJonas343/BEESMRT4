import { v4 as uuidv4 } from "uuid";

export const Footer = () => {
	const quickLinks = [
		{ href: "#features", label: "Features" },
		{ href: "#video", label: "Demo" },
		{ href: "#testimonials", label: "Reviews" },
		{ href: "#pricing", label: "Pricing" },
		{ href: "https://www.beesmrt.com/help-center", label: "Help Center" },
	];

	return (
		<footer className="bg-hive text-nectar py-16 relative overflow-hidden">
			{/* Decorative honeycomb pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="grid grid-cols-8 gap-4 transform rotate-12 scale-150">
					{Array.from({ length: 32 }, () => (
						<div key={uuidv4()} className="w-8 h-8 bg-honey honeycomb" />
					))}
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* Brand section */}
					<div className="md:col-span-2">
						<div className="flex items-center space-x-3 mb-4">
							<div className="text-4xl">🐝</div>
							<div className="text-3xl font-['Bebas_Neue'] tracking-wider font-semibold  text-honey">
								BeeSmrt
							</div>
						</div>
						<p className="text-nectar/80 leading-relaxed mb-6 max-w-md font-['Oswald']">
							Making English learning fun, engaging, and effective through
							gamification. Join our buzzing community of learners from around
							the world!
						</p>
						<div className="flex space-x-4">
							<a
								href="https://www.linkedin.com/company/beesmrt"
								className="text-2xl hover:text-honey transition-colors hover:scale-110 transform duration-200"
							>
								📘
							</a>
							<a
								href="https://www.instagram.com/beesmrt"
								className="text-2xl hover:text-honey transition-colors hover:scale-110 transform duration-200"
							>
								🐦
							</a>
							<a
								href="https://www.facebook.com/beesmrt"
								className="text-2xl hover:text-honey transition-colors hover:scale-110 transform duration-200"
							>
								📷
							</a>
							<a
								href="https://www.twitter.com/beesmrt"
								className="text-2xl hover:text-honey transition-colors hover:scale-110 transform duration-200"
							>
								💼
							</a>
							<a
								href="https://www.youtube.com/beesmrt"
								className="text-2xl hover:text-honey transition-colors hover:scale-110 transform duration-200"
							>
								🎵
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-['Oswald'] font-semibold text-lg text-honey mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-nectar/80 hover:text-yellow-600 transition-colors font-['Oswald']"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-['Oswald'] font-semibold text-lg text-honey mb-4">
							Contact
						</h3>
						<ul className="space-y-2">
							<li className="flex items-center space-x-2">
								<span>📧</span>
								<a
									href="mailto:hello@beesmrt.com"
									className="text-nectar/80 hover:text-honey transition-colors font-['Oswald']"
								>
									hello@beesmrt.com
								</a>
							</li>
							<li className="flex items-center space-x-2">
								<span>🎓</span>
								<a
									href="mailto:schools@beesmrt.com"
									className="text-nectar/80 hover:text-honey transition-colors font-['Oswald']"
								>
									schools@beesmrt.com
								</a>
							</li>
							<li className="flex items-center space-x-2">
								<span>💬</span>
								<span className="text-nectar/80 font-['Oswald']">
									Live Chat Support
								</span>
							</li>
							<li className="flex items-center space-x-2">
								<span>🌍</span>
								<span className="text-nectar/80 font-['Oswald']">
									Global Community
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom section */}
				<div className="border-t border-honey/20 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-nectar/60 text-sm font-['Oswald']">
							© {new Date().getFullYear()} BeeSmrt. All rights reserved. Made
							with 🍯 and lots of ☕
						</div>
						<div className="flex space-x-6 text-sm">
							<a
								href="https://www.beesmrt.com/privacy-policy"
								className="text-nectar/80 hover:text-yellow-600 transition-colors font-['Oswald']"
							>
								Privacy Policy
							</a>
							<a
								href="https://www.beesmrt.com/terms-of-service"
								className="text-nectar/80 hover:text-yellow-600 transition-colors font-['Oswald']"
							>
								Terms of Service
							</a>
							<a
								href="https://www.beesmrt.com/cookie-policy"
								className="text-nectar/80 hover:text-yellow-600 transition-colors font-['Oswald']"
							>
								Cookie Policy
							</a>
						</div>
					</div>

					{/* Fun message */}
					<div className="text-center mt-8 text-nectar/60 text-sm font-['Oswald']">
						<p>
							🐝 Keep buzzing and learning! Remember, every expert was once a
							beginner. 🌟
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
