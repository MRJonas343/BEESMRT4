import { createFileRoute } from "@tanstack/react-router";
import {
	Button,
	Link,
	Card,
	CardBody,
	Divider,
	CardHeader,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/schemas";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAuthUser } from "@/hooks";
import { FaEye, FaEyeSlash, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { MainButton, Text, TextInput } from "@/components";

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
		console.log(data);
		mutation.mutate(data);
		reset();
	};

	return (
		<section className="flex-1 flex items-center justify-center mx-8 mt-5 lg:mt-10">
			<Card className="w-full max-w-xl bg-featured">
				<CardHeader className="flex flex-col items-center justify-center pt-10">
					<Text
						type="h1"
						className="text-black text-center font-['Bebas_Neue']"
					>
						WELCOME <span className="text-gradient">BACK!</span>
					</Text>
					<Text type="p" className="text-black text-center">
						Ready to buzz?
					</Text>
				</CardHeader>
				<CardBody className="pb-8 px-8 space-y-6">
					<div className="space-y-3">
						<Button
							variant="bordered"
							radius="sm"
							fullWidth
							className="border-gray-300 text-black hover:bg-gray-50 font-['Oswald'] text-lg py-6"
							startContent={<FcGoogle className="text-xl" />}
						>
							Continue with Google
						</Button>

						<Button
							variant="bordered"
							radius="sm"
							className="w-full border-gray-300 text-black hover:bg-gray-50 font-['Oswald'] text-lg py-6"
							startContent={<FaMicrosoft className="text-xl text-blue-600" />}
						>
							Continue with Microsoft
						</Button>
					</div>

					<div className="flex items-center space-x-4">
						<Divider className="flex-1" />
						<Text type="span">Or continue with</Text>
						<Divider className="flex-1" />
					</div>

					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-2">
							<TextInput
								type="email"
								label="Email"
								register={register}
								formLabel="email"
								errors={errors}
								autoComplete="email"
								autoFocus
							/>
						</div>

						<div className="space-y-2">
							<TextInput
								type={isVisible ? "text" : "password"}
								label="Password"
								register={register}
								formLabel="password"
								errors={errors}
								endContent={
									<Button
										className="focus:outline-none"
										type="button"
										isIconOnly
										onPress={toggleVisibility}
										variant="light"
									>
										{isVisible ? (
											<FaEyeSlash className="text-black/50" size={25} />
										) : (
											<FaEye className="text-black/50" size={25} />
										)}
									</Button>
								}
								autoComplete="current-password"
							/>
						</div>

						<MainButton
							label="JOIN NOW!"
							className="w-full py-6 text-xl lg:text-2xl"
							isLoading={mutation.isPending}
							radius="sm"
							type="submit"
						/>
					</form>

					<div className="text-center">
						<Link
							href="/forgot-password"
							className="text-blue-600 text-sm lg:text-base hover:underline font-['Oswald']"
						>
							I forgot my password
						</Link>
					</div>

					<div className="text-center">
						<p className="text-gray-600 text-sm font-['Oswald'] lg:text-base">
							Don't you already have an account?{" "}
							<Link
								href="/register"
								className="text-blue-600 hover:underline font-semibold font-['Oswald'] lg:text-base text-sm"
							>
								Create one here
							</Link>
						</p>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}

export const Route = createFileRoute("/_public/login")({
	component: RouteComponent,
});
