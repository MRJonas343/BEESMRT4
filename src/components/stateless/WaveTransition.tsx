export const WaveTransition = ({ fill }: { fill: string }) => {
	return (
		<div className="absolute bottom-0 left-0 right-0">
			<svg
				viewBox="0 0 1200 200"
				preserveAspectRatio="none"
				className="w-full h-32"
			>
				<title>Wave transition to next section</title>
				<path
					d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
					fill={fill}
				/>
			</svg>
		</div>
	);
};
