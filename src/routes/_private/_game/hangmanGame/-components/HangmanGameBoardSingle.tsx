import { Button } from "@heroui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ModalCompleteLevel, Text } from "@/components";
import { useCompleteLevel } from "@/hooks";
import type { GameLevelResponse, HangmanGameLevel } from "@/interfaces";
import { getGameRoute, getLevelsQueryOptions, shootBees, toast } from "@/utils";
import {
	checkGameComplete,
	createInitialGameState,
	getAlphabetButtons,
	getHangmanImage,
	type HangmanGameState,
	handleLetterGuess,
	handleWordGuess,
	initializeWordProgress,
	startNextRound,
} from "../-utils";
import { GameOverModal } from "./GameOverModal";
import { GuessWordModal } from "./GuessWordModal";

export const HangmanGameBoardSingle = ({
	levelResponse,
}: {
	levelResponse: GameLevelResponse<HangmanGameLevel>;
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
		getLevelsQueryOptions("HangmanGame", englishLevel),
	);

	// Game state
	const [gameState, setGameState] = useState<HangmanGameState>(() => {
		const initialState = createInitialGameState();
		if (levelData.length > 0) {
			return {
				...initialState,
				currentWordProgress: initializeWordProgress(levelData[0].word),
			};
		}
		return initialState;
	});

	// Modals
	const [isGuessModalOpen, setIsGuessModalOpen] = useState(false);

	const { mutate: completeLevel } = useCompleteLevel();
	const navigate = useNavigate();

	// Current word data
	const currentWordData = levelData[gameState.currentRound];
	const alphabetButtons = getAlphabetButtons();

	// Progress calculation
	const progress =
		((gameState.currentRound + (gameState.isRoundComplete ? 1 : 0)) /
			levelData.length) *
		100;
	const isGameComplete = gameState.isGameWon;

	// Handle letter button click
	const handleLetterClick = useCallback(
		(letter: string) => {
			if (gameState.isGameOver || gameState.isRoundComplete || !currentWordData)
				return;

			const newGameState = handleLetterGuess(
				letter,
				currentWordData.word,
				gameState,
			);
			setGameState(newGameState);
		},
		[gameState, currentWordData],
	);

	// Handle word guess from modal
	const handleWordGuessSubmit = useCallback(
		(guessedWord: string) => {
			if (!currentWordData) return;

			const newGameState = handleWordGuess(
				guessedWord,
				currentWordData.word,
				gameState,
			);
			setGameState(newGameState);
			setIsGuessModalOpen(false);
		},
		[gameState, currentWordData],
	);

	// Handle next round
	const handleNextRound = useCallback(() => {
		if (gameState.currentRound + 1 < levelData.length) {
			const nextWord = levelData[gameState.currentRound + 1];
			const newGameState = startNextRound(nextWord.word, gameState);
			setGameState(newGameState);
		} else {
			// Check if game is complete
			const finalGameState = checkGameComplete(
				gameState.currentRound + 1,
				levelData.length,
				gameState,
			);
			setGameState(finalGameState);
		}
	}, [gameState, levelData]);

	// Check if round is complete and handle auto-advance
	useEffect(() => {
		if (
			gameState.isRoundComplete &&
			!gameState.isGameOver &&
			!gameState.isGameWon
		) {
			const timer = setTimeout(() => {
				handleNextRound();
			}, 1500); // Give user time to see completed word

			return () => clearTimeout(timer);
		}
	}, [
		gameState.isRoundComplete,
		gameState.isGameOver,
		gameState.isGameWon,
		handleNextRound,
	]);

	// Handle game completion
	useEffect(() => {
		if (isGameComplete) {
			shootBees();
			if (!levelCompleted) {
				completeLevel({ game: "HangmanGame", level: levelName });
			}
		}
	}, [isGameComplete, levelCompleted, levelName, completeLevel]);

	// Handle play again
	const handlePlayAgain = () => {
		const initialState = createInitialGameState();
		setGameState({
			...initialState,
			currentWordProgress: initializeWordProgress(levelData[0].word),
		});
	};

	// Handle next level navigation
	const handleNextLevel = () => {
		const nextLevelNum = Number.parseInt(levelNumber) + 1;
		const nextLevelName = `${englishLevel}Level${nextLevelNum}`;

		const nextLevelExists = allLevels.find(
			(level) => level.level === nextLevelName,
		);

		if (nextLevelExists) {
			navigate({
				to: getGameRoute("HangmanGame", "SingleMode").to,
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

	// Render hearts for lives
	const renderHearts = () => {
		const heartIds = ["heart-1", "heart-2", "heart-3", "heart-4", "heart-5"];
		return heartIds.map((heartId, index) => (
			<span key={heartId} className="text-2xl">
				{index < gameState.lives ? "❤️" : "🤍"}
			</span>
		));
	};

	// Render word progress
	const renderWordProgress = () => {
		return gameState.currentWordProgress.map((letter, index) => (
			<span
				key={`word-${gameState.currentRound}-${index}`}
				className="inline-block w-8 h-8 border-b-2 border-gray-800 mx-1 text-center text-xl font-bold font-['Oswald'] uppercase"
			>
				{letter !== "_" ? letter : ""}
			</span>
		));
	};

	if (!currentWordData) return <div>Loading...</div>;

	return (
		<>
			<Text type="h2" className="font-['Bebas_Neue'] text-center text-4xl mt-2">
				Hangman <span className="text-buzz">Game</span>
			</Text>
			<div className="py-6 max-w-6xl mx-4 bg-card mt-2 rounded-2xl shadow-xl border border-gray-200/50 lg:mx-auto">
				{/* Header */}
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
								Round {gameState.currentRound + 1}/5
							</Text>
							<Text type="h3" className="font-['Bebas_Neue'] md:text-3xl">
								{trophies} 🏆
							</Text>
						</div>
					</div>
				</div>

				{/* Lives (Hearts) */}
				<div className="flex justify-center mb-6 gap-1">{renderHearts()}</div>

				{/* Hangman Image */}
				<div className="flex justify-center mb-6">
					<img
						src={getHangmanImage(gameState.lives)}
						alt={`Hangman ${5 - gameState.lives}`}
						className="w-48 h-48 object-contain"
					/>
				</div>

				{/* Word Progress */}
				<div className="flex justify-center mb-4">{renderWordProgress()}</div>

				{/* Hint */}
				<div className="text-center mb-6 px-6">
					<Text type="p" className="text-gray-600 italic">
						{currentWordData.hint}
					</Text>
				</div>

				{/* Alphabet Buttons */}
				<div className="px-6 mb-6">
					<div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
						{alphabetButtons.map((letter) => {
							const isGuessed = gameState.guessedLetters.includes(
								letter.toLowerCase(),
							);
							const isDisabled =
								isGuessed || gameState.isGameOver || gameState.isRoundComplete;

							return (
								<Button
									key={letter}
									variant={isGuessed ? "flat" : "solid"}
									color={isGuessed ? "default" : "warning"}
									onPress={() => handleLetterClick(letter)}
									isDisabled={isDisabled}
									className={`aspect-square md:aspect-auto min-w-8 md:min-w-12 md:px-4 md:py-2 p-0 font-['Oswald'] text-lg font-bold ${
										isGuessed ? "opacity-50" : ""
									}`}
								>
									{letter}
								</Button>
							);
						})}
					</div>
				</div>

				{/* Make a Guess Button */}
				<div className="flex justify-center mb-6">
					<Button
						color="warning"
						size="lg"
						onPress={() => setIsGuessModalOpen(true)}
						isDisabled={gameState.isGameOver || gameState.isRoundComplete}
						className="font-['Oswald'] text-lg font-bold"
					>
						Make a Guess
					</Button>
				</div>

				{/* Modals */}
				<GuessWordModal
					isModalOpen={isGuessModalOpen}
					onWordGuess={handleWordGuessSubmit}
					onClose={() => setIsGuessModalOpen(false)}
					hint={currentWordData.hint}
				/>

				<GameOverModal
					isOpen={gameState.isGameOver}
					onPlayAgain={handlePlayAgain}
					currentRound={gameState.currentRound}
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
