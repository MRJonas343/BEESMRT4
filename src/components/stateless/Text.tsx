export const Text = ({
	children,
	type,
	className,
}: {
	children: React.ReactNode;
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
	className?: string;
}) => {
	switch (type) {
		case "h1":
			return (
				<h1
					className={`${className} text-4xl font-bold font-['Bebas_Neue'] text-3d-h1`}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={`${className} text-3xl font-bold font-['Bebas_Neue'] text-3d-h2`}
				>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={`${className} text-2xl font-bold font-['Bebas_Neue']`}>
					{children}
				</h3>
			);
		case "h4":
			return (
				<h4 className={`${className} text-xl font-bold font-['Bebas_Neue']`}>
					{children}
				</h4>
			);
		case "h5":
			return (
				<h5 className={`${className} text-lg font-bold font-['Bebas_Neue']`}>
					{children}
				</h5>
			);
		case "h6":
			return (
				<h6 className={`${className} text-base font-bold font-['Bebas_Neue']`}>
					{children}
				</h6>
			);
		case "p":
			return (
				<p className={`${className} text-base font-['Oswald']`}>{children}</p>
			);
		case "span":
			return (
				<span className={`${className} text-base font-['Oswald']`}>
					{children}
				</span>
			);
		case "div":
			return (
				<div className={`${className} text-base font-['Oswald']`}>
					{children}
				</div>
			);
	}
};
