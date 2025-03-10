import { useContext } from "react";
import { GameContext } from "../App";
import { FaBackspace } from "react-icons/fa";

type KeyProps = {
	letter: string;
};

export default function Key({ letter }: KeyProps) {
	const gameContext = useContext(GameContext);
	const changeGuessedWords = gameContext?.changeGuessedWords;
	const removeLetter = gameContext?.removeLetter;
	const submitWord = gameContext?.submitWord;

	function chooseTypeOfButton() {
		if (changeGuessedWords && removeLetter && submitWord) {
			if (letter === "back") {
				removeLetter();
			} else if (letter === "enter") {
				submitWord();
			} else {
				changeGuessedWords(letter);
			}
		}
	}

	return (
		<li className="[box-shadow:0_5px_5px_rgba(0,0,0,0.2)] rounded-md overflow-hidden hover:scale-[1.05] duration-300">
			<button
				onClick={chooseTypeOfButton}
				className="p-2 px-4 font-bold uppercase min-h-[40px] bg-gray-200 dark:bg-neutral-700">
				{letter === "back" ? <FaBackspace /> : letter}
			</button>
		</li>
	);
}
