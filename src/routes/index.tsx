import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Link,
	Avatar,
	Divider,
} from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";
import {
	FaGamepad,
	//FaEnglishExclamation,
	FaTrophy,
	FaUsers,
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaInstagram,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-[#7C3AED]">
			{/* Navigation */}
			<nav className="flex items-center justify-between p-6 max-w-md mx-auto">
				<div className="flex items-center">
					<div className="text-white font-bold text-xl font-['Bebas_Neue']">
						BEESMRT
					</div>
				</div>
				<Button
					color="warning"
					variant="solid"
					className="font-semibold"
					as={Link}
					href="/login"
				>
					Start playing
				</Button>
			</nav>

			<div className="max-w-md mx-auto px-6 space-y-12">
				{/* Hero Section */}
				<section className="text-center space-y-6">
					<h1 className="text-4xl font-bold text-white font-['Bebas_Neue'] leading-tight">
						Learn English While Playing
					</h1>

					<div className="flex justify-center mb-6">
						<div className="w-40 h-36 bg-cream-100 rounded-lg flex items-center justify-center">
							<FaGamepad className="text-6xl text-purple-600" />
						</div>
					</div>

					<p className="text-cream-100 text-lg leading-relaxed">
						Immerse yourself in an engaging English learning experience with our
						web app featuring, and enjoy the journey to mastering the English
						language
					</p>

					<Button
						color="warning"
						size="lg"
						className="w-full max-w-xs font-bold text-lg py-6"
						as={Link}
						href="/login"
					>
						Start playing
					</Button>
				</section>

				{/* Why BEESMRT Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white text-center font-['Bebas_Neue']">
						Why BEESMRT IS RIGHT FOR YOU?
					</h2>

					<div className="flex items-start space-x-4">
						<div className="flex-1">
							<p className="text-cream-100 leading-relaxed">
								BEESMRT makes learning English fun and effective through
								engaging games and personalized experiences. Stay motivated with
								rewards and compete on global leaderboards. Enjoy a tailored
								learning journey in a secure and supportive environment that
								helps you achieve your language goals.
							</p>
						</div>
						<div className="w-24 h-24 flex-shrink-0">
							<div className="w-full h-full bg-amber-400 rounded-lg flex items-center justify-center transform rotate-45">
								<div className="transform -rotate-45">🍯</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="space-y-8">
					<h2 className="text-3xl font-bold text-white text-center font-['Bebas_Neue']">
						DISCOVER THE HONEYCOMB
					</h2>

					<div className="grid grid-cols-2 gap-4">
						{/* Competitive 1v1 Mode */}
						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4 text-center space-y-3">
								<div className="flex justify-center">
									<FaUsers className="text-4xl text-purple-600" />
								</div>
								<h3 className="font-bold text-black text-sm">
									Competitive 1v1 Mode
								</h3>
								<p className="text-xs text-gray-700 leading-tight">
									Challenge others in real-time 1v1 matches to test your skills
								</p>
							</CardBody>
						</Card>

						{/* Interactive Games */}
						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4 text-center space-y-3">
								<div className="flex justify-center">
									<FaGamepad className="text-4xl text-purple-600" />
								</div>
								<h3 className="font-bold text-black text-sm">
									Interactive games
								</h3>
								<p className="text-xs text-gray-700 leading-tight">
									Play a variety of games designed to improve your English
									skills
								</p>
							</CardBody>
						</Card>

						{/* Level System */}
						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4 text-center space-y-3">
								<div className="flex justify-center">
									{/* <FaEnglishExclamation className="text-4xl text-purple-600" /> */}
								</div>
								<h3 className="font-bold text-black text-sm">Level SYSTEM</h3>
								<p className="text-xs text-gray-700 leading-tight">
									Play our games based on your English level
								</p>
							</CardBody>
						</Card>

						{/* Reward System */}
						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4 text-center space-y-3">
								<div className="flex justify-center">
									<FaTrophy className="text-4xl text-purple-600" />
								</div>
								<h3 className="font-bold text-black text-sm">Reward</h3>
								<p className="text-xs text-gray-700 leading-tight">
									Earn trophies and medals as you progress
								</p>
							</CardBody>
						</Card>
					</div>
				</section>

				{/* Video Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white text-center font-['Bebas_Neue']">
						Take a quick look
					</h2>

					<div className="relative">
						<div className="w-full h-48 bg-gray-800 rounded-lg border-4 border-yellow-400 flex items-center justify-center">
							<Button
								isIconOnly
								color="danger"
								variant="solid"
								size="lg"
								className="w-12 h-12"
							>
								<FaYoutube className="text-2xl" />
							</Button>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-white text-center font-['Bebas_Neue']">
						WHAT OUR USERS SAY
					</h2>

					<div className="space-y-4">
						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4">
								<div className="flex items-start space-x-3">
									<Avatar
										src="https://via.placeholder.com/40"
										size="md"
										className="flex-shrink-0"
									/>
									<div className="space-y-1">
										<div>
											<h4 className="font-bold text-black text-sm">
												Jonas Rosales
											</h4>
											<p className="text-xs text-gray-600">BEESMRT CEO</p>
										</div>
										<p className="text-xs text-gray-700 leading-tight">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</CardBody>
						</Card>

						<Card className="bg-cream-100/90 backdrop-blur-sm">
							<CardBody className="p-4">
								<div className="flex items-start space-x-3">
									<Avatar
										src="https://via.placeholder.com/40"
										size="md"
										className="flex-shrink-0"
									/>
									<div className="space-y-1">
										<div>
											<h4 className="font-bold text-black text-sm">
												Jonas Rosales
											</h4>
											<p className="text-xs text-gray-600">BEESMRT CEO</p>
										</div>
										<p className="text-xs text-gray-700 leading-tight">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</section>

				{/* Pricing Section */}
				<section className="space-y-6 text-center">
					<h2 className="text-3xl font-bold text-white font-['Bebas_Neue']">
						PRICING
					</h2>

					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-cream-100 italic">
							"Just kidding, everything's free... for now!"
						</h3>

						<p className="text-cream-100 text-sm leading-relaxed">
							Don't worry, we believe in keeping the good stuff free forever. We
							are planning to introduce a premium subscription for some extra
							fancy content, but everything you're enjoying now will remain
							free. And hey, we're an educational platform at heart, so if
							you're a school, hit us up! We've got some sweet deals just for
							you—because who doesn't love a good bargain? 😉
						</p>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className="bg-gray-800 mt-16">
				<div className="max-w-md mx-auto p-6 space-y-6">
					{/* Logo and Mission */}
					<div className="space-y-4">
						<div className="text-white font-bold text-xl font-['Bebas_Neue']">
							BEESMRT
						</div>

						<div className="space-y-2">
							<h3 className="text-cream-100 font-bold">OUR Mission</h3>
							<p className="text-cream-100 text-sm leading-relaxed">
								To make learning English an enjoyable and accessible experience
								for everyone. We strive to empower users through interactive
								games and personalized challenges.
							</p>
						</div>
					</div>

					<Divider className="bg-gray-600" />

					{/* Contact Info */}
					<div className="space-y-4">
						<h3 className="text-cream-100 font-bold">Contact info</h3>

						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<FaEnvelope className="text-cream-100 w-4 h-4" />
								<span className="text-cream-100 text-sm">
									beesmrt@support.com
								</span>
							</div>

							<div className="flex items-center space-x-3">
								<FaPhone className="text-cream-100 w-4 h-4" />
								<span className="text-cream-100 text-sm">984 165 88 73</span>
							</div>

							<div className="flex items-center space-x-3">
								<FaMapMarkerAlt className="text-cream-100 w-4 h-4" />
								<span className="text-cream-100 text-sm">Mexico...</span>
							</div>
						</div>
					</div>

					<Divider className="bg-gray-600" />

					{/* Social Media */}
					<div className="space-y-4">
						<h3 className="text-cream-100 font-bold">Social Media</h3>

						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<FaTiktok className="text-cream-100 w-4 h-4" />
								<span className="text-cream-100 text-sm">@beesmrtGames</span>
							</div>

							<div className="flex items-center space-x-3">
								<FaInstagram className="text-cream-100 w-4 h-4" />
								<span className="text-cream-100 text-sm">@beesmrt</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
