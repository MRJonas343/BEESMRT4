import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { signOut } from "../utils/auth-client";

export const useLogOut = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const logOut = () => {
		signOut({
			fetchOptions: {
				onSuccess: async () => {
					await queryClient.invalidateQueries({ queryKey: ["user"] });
					navigate({ to: "/login" });
				},
			},
		});
	};

	return {
		logOut,
	};
};
