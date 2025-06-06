import { z } from "zod";

// Login Schema
export const loginSchema = z.object({
	email: z
		.string()
		.min(3, "Email must be at least 3 characters")
		.max(25, "Email must be less than 25 characters")
		.email("Invalid email address"),
	password: z.string().min(8, "Password is required"),
});

// Sign Up Schema
export const signUpSchema = z.object({
	email: z
		.string()
		.min(3, "Email must be at least 3 characters")
		.max(25, "Email must be less than 25 characters")
		.email("Invalid email address"),
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

// Registration Schema
export const registrationSchema = z
	.object({
		email: z
			.string()
			.min(3, "Email must be at least 3 characters")
			.max(25, "Email must be less than 25 characters")
			.email("Invalid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
			),
		confirmPassword: z.string(),
		nickName: z
			.string()
			.min(3, "Nickname must be at least 3 characters")
			.max(20, "Nickname must be less than 20 characters"),
		englishLevel: z.string().min(1, "Please select your English level"),
		profilePicture: z
			.instanceof(File)
			.refine((file) => file.size <= 5000000, "File size must be less than 5MB")
			.refine(
				(file) =>
					["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
						file.type,
					),
				"Only .jpg, .jpeg, .png and .webp formats are supported",
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type RegistrationFormData = z.infer<typeof registrationSchema>;
