import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import type { SignUpFormData } from "@/schemas";
import { authClient, getError, toast } from "@/utils";
import { fetchSessionFn } from "@/utils/fetch-session";

export const useSignUpUser = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (formData: SignUpFormData) => {
			await authClient.signUp.email(formData, {
				onError: (error) => {
					const errorName = getError(error.error.code || "ERR_SERVER_ERROR");
					toast("Something went wrong", errorName, "error");
				},
				onSuccess: async () => {
					const session = await fetchSessionFn();
					queryClient.setQueryData(["user"], session);
					toast(
						"Welcome to the beehive",
						"You are now a member of the beehive",
						"success",
					);
					navigate({ to: "/GameMenu" });
				},
			});
		},
		retry: false,
	});

	return mutation;
};
