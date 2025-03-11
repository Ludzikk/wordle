import { useContext, useEffect, useState } from "react";
import { GameContext } from "../App";
import { FaBackspace } from "react-icons/fa";

type KeyProps = {
	letter: string;
};

export default function Key({ letter }: KeyProps) {
	const [bgColor, setBgColor] = useState("");
	const gameContext = useContext(GameContext);
	const changeGuessedWords = gameContext?.changeGuessedWords;
	const removeLetter = gameContext?.removeLetter;
	const submitWord = gameContext?.submitWord;
	const guessedWords = gameContext?.guessedWords;
	const solution = gameContext?.solution;
	const guessedAmount = gameContext?.guessedAmount;

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

	const styles = {
		backgroundColor: bgColor,
	};

	useEffect(() => {
		if (solution) {
			guessedWords?.forEach((word) => {
				if (word) {
					for (let i = 0; i < word?.length; i++) {
						if (guessedWords?.filter((word) => word).length !== guessedAmount) {
							break;
						}

						if (solution[i] === word[i] && solution[i] === letter) {
							setBgColor("#05df72");
						} else if (solution.includes(word[i]) && word[i] === letter) {
							setBgColor("#ff8904");
						}
					}
				}
			});
		}
	}, [guessedWords, guessedAmount, letter, solution]);

	return (
		<li
			className={`[box-shadow:0_5px_5px_rgba(0,0,0,0.2)] rounded-md overflow-hidden hover:scale-[1.05] duration-300`}>
			<button
				aria-label={
					letter === "back" ? "Click to delete last letter from word" : ""
				}
				onClick={chooseTypeOfButton}
				className={`p-2 px-4 font-bold uppercase min-h-[40px] bg-gray-200 dark:bg-neutral-700`}
				style={styles}>
				{letter === "back" ? <FaBackspace /> : letter}
			</button>
		</li>
	);
}
