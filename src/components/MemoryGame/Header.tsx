interface HeaderProps {
	gameName: string;
}

export function Header({ gameName }: HeaderProps) {
	return (
		<div className="text-center py-8">
			<h1 className="text-4xl font-bold text-yellow-300 mb-2">BEESMRT</h1>
			<h2 className="text-3xl font-bold tracking-wider">
				{gameName
					.toUpperCase()
					.replace(/([A-Z])/g, " $1")
					.trim()}
			</h2>
		</div>
	);
}
