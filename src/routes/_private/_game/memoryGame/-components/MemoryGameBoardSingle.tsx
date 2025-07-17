import ProgressBar from "@ramonak/react-progress-bar";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { type KeyboardEvent, useEffect, useState } from "react";
import { ModalCompleteLevel, Text } from "@/components";
import { useCompleteLevel } from "@/hooks";
import type { Card, GameLevelResponse, MemoryGameLevel } from "@/interfaces";
import { getGameRoute, getLevelsQueryOptions, shootBees, toast } from "@/utils";
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

	const englishLevel = levelResponse.level.split("Level")[0];
	const levelNumber = levelResponse.level.split("Level")[1];

	const { data: allLevels } = useSuspenseQuery(
		getLevelsQueryOptions("MemoryGame", englishLevel),
	);

	const [cards, setCards] = useState<Card[]>(createGameCards(levelData));
	const [flippedCards, setFlippedCards] = useState<string[]>([]);
	const [matchedPairs, setMatchedPairs] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<Card | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [canFlip, setCanFlip] = useState(true);

	const { mutate: completeLevel } = useCompleteLevel();
	const navigate = useNavigate();

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
			setFlippedCards,
			setCurrentQuestion,
			setIsModalOpen,
			setCanFlip,
		);
	};

	const progress = (matchedPairs / levelData.length) * 100;
	const isGameComplete = matchedPairs === levelData.length;

	useEffect(() => {
		if (isGameComplete) {
			shootBees();
			if (!levelCompleted)
				completeLevel({ game: "MemoryGame", level: levelName });
		}
	}, [isGameComplete, levelCompleted, levelName, completeLevel]);

	const handleNextLevel = () => {
		const nextLevelNum = Number.parseInt(levelNumber) + 1;
		const nextLevelName = `${englishLevel}Level${nextLevelNum}`;

		const nextLevelExists = allLevels.find(
			(level) => level.level === nextLevelName,
		);

		if (nextLevelExists) {
			navigate({
				to: getGameRoute("MemoryGame", "SingleMode").to,
				params: {
					level: nextLevelName,
				},
			});
			return;
		}
		toast(
			"Congratulations! 🎉",
			"You've completed all levels for this English level!",
			"success",
		);
	};

	return (
		<>
			<Text type="h2" className="font-['Bebas_Neue'] text-center text-4xl mt-2">
				Memory <span className="text-buzz">Game</span>
			</Text>
			<div className="py-6 max-w-6xl mx-4 bg-card mt-2 rounded-2xl shadow-xl border border-gray-200/50 lg:mx-auto">
				<div className="mb-6">
					<div className="flex items-center mb-4">
						<div className="flex items-center flex-col w-[30%]">
							<Text
								type="h3"
								className="font-['Bebas_Neue'] text-buzz md:text-3xl"
							>
								{englishLevel}
							</Text>
							<Text type="h3" className="font-['Bebas_Neue'] md:text-3xl">
								Level {levelNumber}
							</Text>
						</div>

						<div className="w-[40%]">
							<ProgressBar
								completed={progress}
								maxCompleted={100}
								bgColor="#4200FF"
								height="30px"
								borderRadius="15px"
								labelSize="14px"
								labelColor="#D9D9D9"
								customLabel={`${progress.toFixed(1)}%`}
								className="font-['Oswald']"
							/>
						</div>

						<div className="flex flex-col items-center w-[30%]">
							<Text
								type="h3"
								className="font-['Bebas_Neue'] md:text-3xl text-buzz"
							>
								{trophies} 🏆
							</Text>
							<Text type="h3" className="font-['Bebas_Neue'] md:text-3xl">
								{matchedPairs}/{levelData.length} 🐝
							</Text>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-4 md:grid-cols-6 gap-4 px-6">
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
								<div className="absolute inset-0 w-full h-full backface-hidden rounded-lg bg-[#D9D9D9] flex items-center justify-center">
									<div className="text-white text-2xl md:text-4xl">🐝</div>
								</div>

								{/* Card Front */}
								<div
									className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg border-2 p-2 flex flex-col items-center justify-center overflow-hidden ${
										card.isMatched
											? "bg-green-100 border-green-500"
											: card.isFlipped
												? "bg-blue-100 border-blue-500"
												: "bg-white border-gray-200"
									}`}
								>
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

				<ModalCompleteLevel
					isOpen={isGameComplete}
					levelName={`${englishLevel}Level${levelNumber}`}
					onNextLevel={handleNextLevel}
				/>
			</div>
		</>
	);
};
