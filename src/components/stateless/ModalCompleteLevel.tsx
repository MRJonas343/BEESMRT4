import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import trophyImg from "@/assets/trofeo.webp";
import { MainButton, SecondaryButton, Text } from "@/components";
import { Route as GameMenuRoute } from "@/routes/_private/GameMenu";

interface ModalCompleteLevelProps {
	isOpen: boolean;
	levelName: string;
	onNextLevel: () => void;
}

export const ModalCompleteLevel = ({
	isOpen,
	levelName,
	onNextLevel,
}: ModalCompleteLevelProps) => {
	return (
		<Modal
			isOpen={isOpen}
			isDismissable={false}
			placement="center"
			size="md"
			isKeyboardDismissDisabled={true}
		>
			<ModalContent>
				<ModalHeader className="flex flex-col gap-1 pb-2">
					<Text
						type="h3"
						className="font-['Bebas_Neue'] text-center text-4xl text-buzz"
					>
						🎉 Congratulations! 🎉
					</Text>
				</ModalHeader>
				<ModalBody className="flex flex-col items-center justify-center py-6">
					<img src={trophyImg} alt="Trophy" className="w-32 h-32 mb-4" />
					<Text
						type="h3"
						className="font-['Bebas_Neue'] text-center text-2xl mb-2"
					>
						You completed the level
					</Text>
					<Text
						type="h2"
						className="font-['Bebas_Neue'] text-center text-3xl text-buzz mb-6"
					>
						{levelName}
					</Text>
					<div className="flex gap-4 w-full">
						<SecondaryButton
							isLink={true}
							href={GameMenuRoute.to}
							label="Go to Menu"
							className="w-full h-12 text-black"
						/>
						<MainButton
							label="Next Level"
							onPress={onNextLevel}
							className="w-full h-12"
						/>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
