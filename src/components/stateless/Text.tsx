import { twMerge } from "tailwind-merge";

export const Text = ({
	children,
	type,
	className,
}: {
	children: React.ReactNode;
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
	className?: string;
}) => {
	const classes = (...base: string[]) => twMerge(base.join(" "), className);

	switch (type) {
		case "h1":
			return (
				<h1
					className={classes(
						"text-5xl md:text-7xl font-['Bebas_Neue'] font-bold leading-tight",
					)}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={classes(
						"text-4xl md:text-5xl font-['Bebas_Neue'] font-bold",
					)}
				>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={classes("text-xl font-['Oswald'] font-semibold")}>
					{children}
				</h3>
			);
		case "h4":
			return (
				<h4 className={classes("text-xl font-bold font-['Bebas_Neue']")}>
					{children}
				</h4>
			);
		case "h5":
			return (
				<h5 className={classes("text-lg font-bold font-['Bebas_Neue']")}>
					{children}
				</h5>
			);
		case "h6":
			return (
				<h6 className={classes("text-base font-bold font-['Bebas_Neue']")}>
					{children}
				</h6>
			);
		case "p":
			return (
				<p className={classes("text-xl text-gray-900/80 font-['Oswald']")}>
					{children}
				</p>
			);
		case "span":
			return (
				<span
					className={classes(
						"leading-relaxed font-['Oswald'] text-gray-900/80",
					)}
				>
					{children}
				</span>
			);
		case "div":
			return (
				<div className={classes("text-base font-['Oswald']")}>{children}</div>
			);
	}
};
