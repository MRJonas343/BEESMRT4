import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@heroui/react";
import { useNavigate } from "@tanstack/react-router";
import { Text } from "@/components";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";

interface GameOverModalProps {
	isOpen: boolean;
	onPlayAgain: () => void;
	currentRound: number;
}

const getFunnyMessage = (): string => {
	const messages = [
		"🐝 Oops! Looks like our bee got a bit too buzzed to spell! 🍯",
		"🌺 Don't worry, even the best bees need practice with their ABCs! 📚",
		"🐝 Our little bee got stung by the spelling bug! Better luck next time! 🎯",
		"🍯 Sweet attempt! This bee just needs more nectar... I mean, practice! 🌸",
		"🐝 Buzz! That word was trickier than finding the best flowers! 🌼",
	];

	return messages[Math.floor(Math.random() * messages.length)];
};

export const GameOverModal = ({
	isOpen,
	onPlayAgain,
	currentRound,
}: GameOverModalProps) => {
	const navigate = useNavigate();

	const handleGoToMenu = () => {
		navigate({ to: GameMenuRoute.to });
	};

	return (
		<Modal
			isOpen={isOpen}
			isDismissable={false}
			placement="center"
			isKeyboardDismissDisabled={true}
			size="md"
		>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1 pb-2 text-center">
					<Text type="h3" className="font-['Bebas_Neue'] text-red-600">
						Game Over! 💔
					</Text>
				</ModalHeader>
				<ModalBody className="text-center">
					<div className="space-y-4">
						<div className="text-6xl">😢</div>
						<Text type="p" className="text-lg">
							{getFunnyMessage()}
						</Text>
						<Text type="p" className="text-gray-600">
							You completed <strong>{currentRound}</strong> out of 5 rounds!
						</Text>
					</div>
				</ModalBody>
				<ModalFooter className="justify-center gap-4">
					<Button
						color="danger"
						variant="light"
						onPress={handleGoToMenu}
						className="font-['Oswald']"
					>
						Back to Menu
					</Button>
					<Button
						color="primary"
						onPress={onPlayAgain}
						className="font-['Oswald'] bg-buzz text-white"
					>
						🐝 Try Again
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
