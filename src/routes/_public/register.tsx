import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Divider,
	Link,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { type SubmitHandler, useForm } from "react-hook-form";
import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdPerson } from "react-icons/md";
import { MainButton, Text, TextInput } from "@/components";
import { useSignUpUser } from "@/hooks";
import { type SignUpFormData, signUpSchema } from "@/schemas";

function RouteComponent() {
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
	} = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
	});

	const mutation = useSignUpUser();

	const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
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
						CREATE <span className="text-gradient">ACCOUNT</span>
					</Text>
					<Text type="p" className="text-black text-center">
						The bees will guide you to the right path!
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
							Register with Google
						</Button>

						<Button
							variant="bordered"
							radius="sm"
							className="w-full border-gray-300 text-black hover:bg-gray-50 font-['Oswald'] text-lg py-6"
							startContent={<FaMicrosoft className="text-xl text-blue-600" />}
						>
							Register with Microsoft
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
								label="Email"
								register={register}
								errors={errors}
								formLabel="email"
								endContent={<MdEmail />}
								autoComplete="email"
								autoFocus
							/>
						</div>
						<div className="space-y-2">
							<TextInput
								label="Name"
								register={register}
								errors={errors}
								formLabel="name"
								endContent={<MdPerson />}
								autoComplete="name"
							/>
						</div>
						<div className="space-y-2">
							<TextInput
								label="Password"
								register={register}
								errors={errors}
								formLabel="password"
								type="password"
								autoComplete="new-password"
							/>
						</div>
						<MainButton
							label="SIGN UP"
							className="w-full py-6 text-xl lg:text-2xl"
							isLoading={mutation.isPending}
							radius="sm"
							type="submit"
						/>
					</form>

					<div className="text-center">
						<p className="text-gray-600 text-sm font-['Oswald'] lg:text-base">
							Already have an account?{" "}
							<Link
								href="/login"
								className="text-blue-600 hover:underline font-semibold font-['Oswald'] lg:text-base text-sm"
							>
								Login
							</Link>
						</p>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}

export const Route = createFileRoute("/_public/register")({
	component: RouteComponent,
});
