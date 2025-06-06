import type { SignUpFormData } from "@/schemas";
import { authClient, getError, toast } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useSignUpUser = () => {
	const mutation = useMutation({
		mutationFn: async (formData: SignUpFormData) => {
			await authClient.signUp.email(formData, {
				onError: (error) => {
					const errorName = getError(error.error.code || "ERR_SERVER_ERROR");
					toast("Something went wrong", errorName, "error");
				},
				onSuccess: (data) => {
					toast(
						"Welcome to the beehive",
						"You are now a member of the beehive",
						"success",
					);
				},
			});
		},
		retry: false,
	});

	return mutation;
};
