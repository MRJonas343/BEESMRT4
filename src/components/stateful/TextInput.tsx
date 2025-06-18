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
			variant="bordered"
			radius="sm"
			className={`font-['Oswald'] rounded-md ${className}`}
			description={description}
			endContent={endContent}
			isInvalid={isInvalid}
			errorMessage={isInvalid && errorMessage}
			{...register(formLabel)}
			classNames={{
				inputWrapper: [
					"border-amber-500",
					"data-[hover=true]:border-amber-500",
					"data-[focus=true]:border-amber-500",
				],
			}}
		/>
	);
};
