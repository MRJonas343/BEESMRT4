import type { Card } from "@/interfaces";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
} from "@heroui/react";
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
	return (
		<Modal isOpen={isModalOpen} isDismissable={false} placement="center">
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1">
					<h2>Answer the Question</h2>
				</ModalHeader>
				<ModalBody>
					{currentQuestion && (
						<div>
							<p className="text-lg mb-4 font-medium">
								{currentQuestion.question}
							</p>
							<div className="grid grid-cols-1 gap-3">
								{shuffleAnswers(currentQuestion).map((answer) => (
									<Button
										key={`${currentQuestion.id}-${answer}`}
										variant="bordered"
										className="justify-start text-left p-4 h-auto"
										onClick={() => handleAnswerSelection(answer)}
									>
										{answer}
									</Button>
								))}
							</div>
						</div>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
