import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@heroui/react";
import { useState } from "react";
import { Text } from "@/components";

interface GuessWordModalProps {
	isModalOpen: boolean;
	onWordGuess: (word: string) => void;
	onClose: () => void;
	hint: string;
}

export const GuessWordModal = ({
	isModalOpen,
	onWordGuess,
	onClose,
	hint,
}: GuessWordModalProps) => {
	const [guessedWord, setGuessedWord] = useState("");

	const handleSubmit = () => {
		if (guessedWord.trim()) {
			onWordGuess(guessedWord.trim());
			setGuessedWord("");
		}
	};

	const handleClose = () => {
		setGuessedWord("");
		onClose();
	};

	return (
		<Modal
			isOpen={isModalOpen}
			onOpenChange={handleClose}
			placement="center"
			size="md"
		>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1 pb-2">
					<Text type="h3" className="font-['Bebas_Neue']">
						Make a Guess
					</Text>
				</ModalHeader>
				<ModalBody>
					<div className="space-y-4">
						<Text type="p" className="text-gray-600">
							<strong>Hint:</strong> {hint}
						</Text>
						<Input
							label="Your guess"
							placeholder="Type the word here..."
							value={guessedWord}
							onValueChange={setGuessedWord}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSubmit();
								}
							}}
							autoFocus
							classNames={{
								input: "font-['Oswald']",
								label: "font-['Oswald']",
							}}
						/>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						color="danger"
						variant="light"
						onPress={handleClose}
						className="font-['Oswald']"
					>
						Cancel
					</Button>
					<Button
						color="primary"
						onPress={handleSubmit}
						isDisabled={!guessedWord.trim()}
						className="font-['Oswald'] bg-buzz text-white"
					>
						Guess Word
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
