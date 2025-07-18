import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import type { LoginFormData } from "@/schemas";
import { getError, signIn, toast } from "@/utils";
import { fetchSessionFn } from "@/utils/fetch-session";

export const useAuthUser = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data: LoginFormData) => {
			const response = await signIn.email(data, {
				onError: (error) => {
					const errorName = getError(error.error.code || "ERR_SERVER_ERROR");
					toast("Something went wrong", errorName, "error");
				},
				onSuccess: async () => {
					const session = await fetchSessionFn();
					queryClient.setQueryData(["user"], session);
					toast("Welcome back", "You are now logged in", "success");
					navigate({ to: "/GameMenu" });
				},
			});
			return response;
		},

		retry: false,
	});

	return mutation;
};
