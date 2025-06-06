import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import {
	Button,
	Link,
	Input,
	Card,
	CardBody,
	Divider,
	Image,
	Navbar,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/schemas";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useAuthUser } from "@/hooks";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { useState } from "react";
import { MainLayout } from "@/components";
import logo from "@/assets/logo_white.webp";
import { Text } from "@/components/stateless/Text";

function RouteComponent() {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const mutation = useAuthUser();

	const onSubmit: SubmitHandler<LoginFormData> = (data) => {
		mutation.mutate(data);
		reset();
	};

	const navigate = useNavigate();

	return (
		<MainLayout>
			{/* Header */}
			<Navbar isBlurred={false} className="bg-transparent py-4">
				<div className="flex items-center">
					<Image
						src={logo}
						alt="BEESMRT Logo"
						className="h-12 w-auto"
						onClick={() => navigate({ to: "/" })}
					/>
				</div>
				<Button
					color="warning"
					variant="solid"
					className="bg-[#FFD400] font-['Bebas_Neue'] px-6 text-lg "
					as={Link}
					radius="sm"
					href="/register"
				>
					SIGN UP HERE
				</Button>
			</Navbar>

			{/* Welcome Message */}
			<div className="text-center mb-8 px-6">
				<Text type="h1" className="text-white">
					WELCOME <span className="text-[#FFD400]">BACK!</span>
				</Text>
				<Text type="p" className="text-white">
					Please enter your email and password to login.
				</Text>
			</div>

			{/* Login Card */}
			<div className="flex-1 flex items-start justify-center px-6">
				<Card className="w-full max-w-md bg-white">
					<CardBody className="p-8 space-y-6">
						<h2 className="text-3xl font-bold text-center text-black font-['Bebas_Neue'] mb-6">
							LOG IN
						</h2>

						{/* Form with only email, password, and submit button */}
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							{/* Email Input */}
							<div className="space-y-2">
								<Input
									{...register("email")}
									type="email"
									label="Email"
									variant="underlined"
									labelPlacement="outside"
									classNames={{
										label: "text-black font-semibold text-sm",
										input: "text-black",
										inputWrapper:
											"border-black data-[hover=true]:border-black group-data-[focus=true]:border-black",
									}}
									autoComplete="email"
									autoFocus
								/>
								{errors.email && (
									<p className="text-red-500 text-xs">{errors.email.message}</p>
								)}
							</div>

							{/* Password Input */}
							<div className="space-y-2">
								<Input
									{...register("password")}
									type={isVisible ? "text" : "password"}
									label="Password"
									variant="underlined"
									labelPlacement="outside"
									classNames={{
										label: "text-black font-semibold text-sm",
										input: "text-black",
										inputWrapper:
											"border-black data-[hover=true]:border-black group-data-[focus=true]:border-black",
									}}
									endContent={
										<button
											className="focus:outline-none"
											type="button"
											onClick={toggleVisibility}
										>
											{isVisible ? (
												<FaEyeSlash className="text-black/50" />
											) : (
												<FaEye className="text-black/50" />
											)}
										</button>
									}
									autoComplete="current-password"
								/>
								{errors.password && (
									<p className="text-red-500 text-xs">
										{errors.password.message}
									</p>
								)}
							</div>

							{/* Submit Button */}
							<Button
								type="submit"
								className="w-full bg-[#FFD400] hover:bg-[#FFD400]/90 text-black font-bold text-lg py-6 font-['Bebas_Neue']"
								size="lg"
								isLoading={mutation.isPending}
							>
								JOIN NOW!
							</Button>
						</form>

						{/* Forgot Password - Outside form */}
						<div className="text-center">
							<Link
								href="/forgot-password"
								className="text-blue-600 text-sm hover:underline"
							>
								I forgot my password
							</Link>
						</div>

						{/* Divider - Outside form */}
						<div className="flex items-center space-x-4">
							<Divider className="flex-1" />
							<span className="text-gray-500 text-sm">Or</span>
							<Divider className="flex-1" />
						</div>

						{/* Social Login Buttons - Outside form */}
						<div className="space-y-3">
							<Button
								variant="bordered"
								className="w-full border-gray-300 text-black hover:bg-gray-50"
								startContent={<FcGoogle className="text-xl" />}
							>
								Continue with Google
							</Button>

							<Button
								variant="bordered"
								className="w-full border-gray-300 text-black hover:bg-gray-50"
								startContent={<FaMicrosoft className="text-xl text-blue-600" />}
							>
								Continue with Microsoft
							</Button>
						</div>

						{/* Sign Up Link - Outside form */}
						<div className="text-center pt-4">
							<p className="text-gray-600 text-sm">
								Don't you already have an account?{" "}
								<Link
									href="/register"
									className="text-blue-600 hover:underline font-semibold"
								>
									Create one here
								</Link>
							</p>
						</div>
					</CardBody>
				</Card>
			</div>
		</MainLayout>
	);
}

export const Route = createFileRoute("/_public/login")({
	component: RouteComponent,
	beforeLoad: async ({ context: { user } }) => {
		if (user) {
			throw redirect({ to: "/dashboard" });
		}
	},
});
