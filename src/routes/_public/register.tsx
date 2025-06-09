import { createFileRoute, redirect } from "@tanstack/react-router";
import { Button, Link } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormData } from "@/schemas";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "@/components";
import { MdEmail, MdPerson } from "react-icons/md";
import { useSignUpUser } from "@/hooks";

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
		<div>
			<h1 className="text-4xl font-bold text-center font-['Bebas_Neue']">
				Sign Up
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					label="Email"
					register={register}
					errors={errors}
					formLabel="email"
					endContent={<MdEmail />}
					autoComplete="email"
					autoFocus
				/>
				<TextInput
					label="Name"
					register={register}
					errors={errors}
					formLabel="name"
					endContent={<MdPerson />}
					autoComplete="name"
				/>
				<TextInput
					label="Password"
					register={register}
					errors={errors}
					formLabel="password"
					type="password"
					autoComplete="new-password"
				/>
				<Button isLoading={mutation.isPending} type="submit">
					Sign Up
				</Button>
				<p className="text-sm text-gray-500">
					Already have an account? <Link href="/login">Login</Link>
				</p>
			</form>
		</div>
	);
}

export const Route = createFileRoute("/_public/register")({
	component: RouteComponent,
	beforeLoad: async ({ context: { user } }) => {
		if (user) {
			throw redirect({ to: "/GameMenu" });
		}
	},
});
