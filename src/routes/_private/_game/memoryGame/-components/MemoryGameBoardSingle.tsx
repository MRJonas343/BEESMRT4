import type { Card, GameCardData } from "@/interfaces";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Button } from "@heroui/react";
import {
	createGameCards,
	handleCardClick,
	handleCardKeyDown,
	handleAnswerSelection,
	handleMatchCheck,
} from "../-utils";
import { QuestionModal } from "./QuestionModal";
import type { KeyboardEvent } from "react";

export const MemoryGameBoard = ({
	levelData,
}: { levelData: GameCardData[] }) => {
	const [cards, setCards] = useState<Card[]>(createGameCards(levelData));
	const [flippedCards, setFlippedCards] = useState<string[]>([]);
	const [matchedPairs, setMatchedPairs] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<Card | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [score, setScore] = useState(0);
	const [canFlip, setCanFlip] = useState(true);

	useEffect(() => {
		handleMatchCheck(
			flippedCards,
			cards,
			setCanFlip,
			setCurrentQuestion,
			setIsModalOpen,
			setCards,
			setFlippedCards,
		);
	}, [flippedCards, cards]);

	const onCardClick = (gameId: string) => {
		handleCardClick(gameId, cards, canFlip, setCards, setFlippedCards);
	};

	const onCardKeyDown = (e: KeyboardEvent, gameId: string) => {
		handleCardKeyDown(e, gameId, onCardClick);
	};

	const onAnswerSelection = (selectedAnswer: string) => {
		handleAnswerSelection(
			selectedAnswer,
			currentQuestion,
			flippedCards,
			setCards,
			setMatchedPairs,
			setScore,
			setFlippedCards,
			setCurrentQuestion,
			setIsModalOpen,
			setCanFlip,
		);
	};

	const progress = (matchedPairs / levelData.length) * 100;
	const isGameComplete = matchedPairs === levelData.length;

	return (
		<div className="p-6 max-w-6xl mx-auto">
			<div className="mb-6">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-2xl font-bold">Memory Game</h1>
					<div className="text-right">
						<div className="text-lg font-semibold">Score: {score}</div>
						<div className="text-sm text-gray-600">
							Pairs: {matchedPairs}/{levelData.length}
						</div>
					</div>
				</div>
				<ProgressBar
					completed={progress}
					maxCompleted={100}
					bgColor="#22c55e"
					height="10px"
					borderRadius="5px"
					labelSize="12px"
				/>
			</div>

			{isGameComplete ? (
				<div className="text-center py-12">
					<h2 className="text-3xl font-bold text-green-600 mb-4">
						Congratulations! 🎉
					</h2>
					<p className="text-lg mb-4">
						You completed the game with a score of {score}!
					</p>
					<Button color="primary" onClick={() => window.location.reload()}>
						Play Again
					</Button>
				</div>
			) : (
				<div className="grid grid-cols-4 md:grid-cols-6 gap-4">
					{cards.map((card) => (
						<button
							key={card.gameId}
							type="button"
							className={`relative aspect-square cursor-pointer transition-transform duration-300 border-none bg-transparent p-0 ${
								card.isFlipped || card.isMatched ? "" : "hover:scale-105"
							}`}
							onClick={() => onCardClick(card.gameId)}
							onKeyDown={(e) => onCardKeyDown(e, card.gameId)}
							aria-label={`Memory card ${card.gameId}`}
						>
							<div
								className={`w-full h-full rounded-lg transition-transform duration-500 transform-style-preserve-3d ${
									card.isFlipped || card.isMatched ? "rotate-y-180" : ""
								}`}
							>
								{/* Card Back */}
								<div className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
									<div className="text-white text-2xl">🐝</div>
								</div>

								{/* Card Front */}
								<div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg bg-white border-2 border-gray-200 p-2 flex flex-col items-center justify-center overflow-hidden">
									<img
										src={card.imgSrc}
										alt="Card"
										className="w-full h-full object-cover rounded"
										onError={(e) => {
											e.currentTarget.style.display = "none";
										}}
									/>
								</div>
							</div>
						</button>
					))}
				</div>
			)}

			<QuestionModal
				isModalOpen={isModalOpen}
				currentQuestion={currentQuestion}
				handleAnswerSelection={onAnswerSelection}
			/>
		</div>
	);
};
