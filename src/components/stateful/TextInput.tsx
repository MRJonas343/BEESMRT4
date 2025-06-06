import { Input } from "@heroui/react";
import type { TextInputModel } from "./interfaces/TextInput.Inf";
import type { FieldValues } from "react-hook-form";

export const TextInput = <TFormValues extends FieldValues = FieldValues>({
	autoFocus,
	className,
	label,
	required,
	type,
	description,
	endContent,
	register,
	formLabel,
	autoComplete,
	errors,
}: TextInputModel<TFormValues>) => {
	const isInvalid = !!errors[formLabel];
	const errorMessage =
		errors[formLabel]?.message?.toString() || "Invalid input";

	return (
		<Input
			autoFocus={autoFocus}
			isRequired={required}
			autoComplete={autoComplete}
			type={type}
			labelPlacement="inside"
			label={label}
			variant="flat"
			radius="sm"
			className={`font-['Bebas_Neue'] rounded-md ${className}`}
			description={description}
			endContent={endContent}
			isInvalid={isInvalid}
			errorMessage={isInvalid && errorMessage}
			{...register(formLabel)}
			classNames={{
				input: "font-['Oswald']",
				label: "font-['Oswald']",
				inputWrapper:
					"bg-white border border-gray-500 active:border-blue-500 focus:ring-2 focus:ring-blue-500",
			}}
		/>
	);
};
