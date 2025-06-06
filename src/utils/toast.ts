import { addToast } from "@heroui/toast";
import type { ReactNode } from "react";

type ToastTypeAdapter = {
	error: "danger";
	success: "success";
	warning: "warning";
	info: "primary";
};

const toastTypeAdapter: ToastTypeAdapter = {
	error: "danger",
	success: "success",
	warning: "warning",
	info: "primary",
};

export const toast = (
	title: string,
	description: string,
	type: keyof ToastTypeAdapter,
	customIcon?: ReactNode,
) => {
	addToast({
		title,
		description,
		color: toastTypeAdapter[type],
		icon: customIcon,
	});
};
