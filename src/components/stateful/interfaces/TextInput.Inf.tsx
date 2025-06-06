import type {
	Path,
	UseFormRegister,
	FieldErrors,
	Validate,
	FieldValues,
} from "react-hook-form";
import type { JSX } from "react";

type enumType = "text" | "password" | "email" | "number";

export interface TextInputModel<TFormValues extends FieldValues = FieldValues> {
	autoFocus?: boolean;
	className?: string;
	label: string;
	required?: boolean;
	autoComplete?: string;
	type?: enumType;
	description?: string;
	endContent?: JSX.Element | JSX.Element[] | string;
	formLabel: Path<TFormValues>;
	pattern?: RegExp;
	minLength?: number;
	maxLength?: number;
	invalidPatternMessage?: string;
	validate?: Validate<string | File, TFormValues>;
	register: UseFormRegister<TFormValues>;
	errors: FieldErrors<TFormValues>;
}
