import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { Text } from "@/components";
import type { Card } from "@/interfaces";
import { shuffleAnswers } from "../-utils";

interface QuestionModalProps {
	isModalOpen: boolean;
	currentQuestion: Card | null;
	handleAnswerSelection: (selectedAnswer: string) => void;
}

export const QuestionModal = ({
	isModalOpen,
	currentQuestion,
	handleAnswerSelection,
}: QuestionModalProps) => {
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
	const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

	useEffect(() => {
		if (isModalOpen && currentQuestion) {
			setSelectedAnswer(null);
			setIsAnswerCorrect(null);
			setShuffledAnswers(shuffleAnswers(currentQuestion));
		}
	}, [isModalOpen, currentQuestion]);

	const handleAnswerClick = (answer: string) => {
		if (selectedAnswer) return; // Prevent multiple selections

		setSelectedAnswer(answer);
		const correct = answer === currentQuestion?.correctAnswer;
		setIsAnswerCorrect(correct);

		// Add delay before calling the parent handler
		setTimeout(() => {
			handleAnswerSelection(answer);
		}, 1000);
	};

	return (
		<Modal
			isOpen={isModalOpen}
			isDismissable={false}
			placement="center"
			isKeyboardDismissDisabled={true}
		>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1 pb-2">
					<Text type="h3">Answer the Question</Text>
				</ModalHeader>
				<ModalBody className="mb-6">
					{currentQuestion && (
						<div>
							<Text type="p" className="text-lg mb-4">
								{currentQuestion.question}
							</Text>
							<div className="grid grid-cols-1 gap-3">
								{shuffledAnswers.map((answer) => {
									const isSelected = selectedAnswer === answer;

									let buttonClassName =
										"justify-start text-left p-4 h-auto font-['Oswald'] text-gray-900/80";

									if (isSelected) {
										if (isAnswerCorrect) {
											buttonClassName +=
												" border-green-500 bg-green-50 text-green-800";
										} else {
											buttonClassName +=
												" border-red-500 bg-red-50 text-red-800";
										}
									}

									return (
										<Button
											key={answer}
											variant="bordered"
											className={buttonClassName}
											onPress={() => handleAnswerClick(answer)}
											disabled={selectedAnswer !== null}
										>
											{answer}
										</Button>
									);
								})}
							</div>
						</div>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
