import { Button } from "@heroui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { type KeyboardEvent, useEffect, useState } from "react";
import type { Card, GameLevelResponse, MemoryGameLevel } from "@/interfaces";
import {
	createGameCards,
	handleAnswerSelection,
	handleCardClick,
	handleCardKeyDown,
	handleMatchCheck,
} from "../-utils";
import { QuestionModal } from "./QuestionModal";

export const MemoryGameBoard = ({
	levelResponse,
}: {
	levelResponse: GameLevelResponse<MemoryGameLevel>;
}) => {
	const {
		trophies,
		isCompleted: levelCompleted,
		level: levelName,
		data: levelData,
	} = levelResponse;

	const englishLevel = levelName.split("Level")[0];
	const levelNumber = levelName.split("Level")[1];

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
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center">
						<h1 className="text-2xl font-bold text-gray-800 uppercase">
							{englishLevel} LEVEL {levelNumber}
						</h1>
					</div>

					<div className="flex-1 mx-8">
						<ProgressBar
							completed={progress}
							maxCompleted={100}
							bgColor="#8b5cf6"
							height="20px"
							borderRadius="10px"
							labelSize="14px"
							labelColor="#ffffff"
							customLabel={`${progress.toFixed(1)}%`}
						/>
					</div>

					<div className="flex items-center space-x-4 text-right">
						<div className="text-lg font-semibold text-gray-700">
							PAIRS {matchedPairs}/{levelData.length}
						</div>
						<div className="text-lg font-semibold text-yellow-600">
							{trophies} 🏆
						</div>
						{levelCompleted && (
							<div className="text-sm text-green-600">✓ Completed</div>
						)}
					</div>
				</div>
			</div>

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

			<QuestionModal
				isModalOpen={isModalOpen}
				currentQuestion={currentQuestion}
				handleAnswerSelection={onAnswerSelection}
			/>
		</div>
	);
};
