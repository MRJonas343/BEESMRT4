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
					className={`text-5xl md:text-7xl font-['Bebas_Neue'] font-bold leading-tight ${className}`}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={`text-4xl md:text-5xl font-['Bebas_Neue'] font-bold ${className}`}
				>
					{children}
				</h2>
			);
		case "h3":
			return (
				<h3 className={`text-xl font-['Oswald'] font-semibold ${className}`}>
					{children}
				</h3>
			);
		case "h4":
			return (
				<h4 className={`text-xl font-bold font-['Bebas_Neue'] ${className}`}>
					{children}
				</h4>
			);
		case "h5":
			return (
				<h5 className={`text-lg font-bold font-['Bebas_Neue'] ${className}`}>
					{children}
				</h5>
			);
		case "h6":
			return (
				<h6 className={`text-base font-bold font-['Bebas_Neue'] ${className}`}>
					{children}
				</h6>
			);
		case "p":
			return (
				<p className={`text-xl text-gray-900/80 font-['Oswald'] ${className}`}>
					{children}
				</p>
			);
		case "span":
			return (
				<span
					className={`leading-relaxed font-['Oswald'] text-gray-900/80 ${className}`}
				>
					{children}
				</span>
			);
		case "div":
			return (
				<div className={`text-base font-['Oswald'] ${className}`}>
					{children}
				</div>
			);
	}
};
