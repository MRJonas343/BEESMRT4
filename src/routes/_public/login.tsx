import { createFileRoute, redirect } from "@tanstack/react-router";
import { Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/schemas";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { TextInput, type FormValues } from "@/components";
import { MdEmail } from "react-icons/md";
import { useAuthUser } from "@/hooks";

function RouteComponent() {
	const {
		formState: { errors },
		register,
		handleSubmit,
		reset,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const mutation = useAuthUser();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		mutation.mutate(data);
		reset();
	};

	return (
		<div>
			<h1 className="text-4xl font-bold text-center font-['Bebas_Neue']">
				Login
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
					label="Password"
					register={register}
					errors={errors}
					formLabel="password"
					type="password"
					autoComplete="current-password"
				/>
				<Button type="submit">Login</Button>
			</form>
		</div>
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
