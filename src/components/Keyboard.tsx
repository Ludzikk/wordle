import Key from "./Key";
import { useEffect, useContext, useMemo } from "react";
import { GameContext } from "../App";

export default function Keyboard() {
	const gameContext = useContext(GameContext);
	const changeGuessedWords = gameContext?.changeGuessedWords;
	const removeLetter = gameContext?.removeLetter;
	const submitWord = gameContext?.submitWord;
	const solution = gameContext?.solution;

	const keys: string[] = useMemo(
		() => [
			"q",
			"w",
			"e",
			"r",
			"t",
			"y",
			"u",
			"i",
			"o",
			"p",
			"a",
			"s",
			"d",
			"f",
			"g",
			"h",
			"j",
			"k",
			"l",
			"enter",
			"z",
			"x",
			"c",
			"v",
			"b",
			"n",
			"m",
			"back",
		],
		[]
	);

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			const keyPressed = event.key.toLowerCase();

			if (
				keys.includes(keyPressed) ||
				(keyPressed === "enter" && keys.includes("enter")) ||
				(keyPressed === "backspace" && keys.includes("back"))
			) {
				if (removeLetter && submitWord && changeGuessedWords) {
					if (keyPressed === "backspace") {
						removeLetter();
					} else if (keyPressed === "enter") {
						submitWord();
					} else {
						changeGuessedWords(keyPressed);
					}
				}
			}
		};

		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [changeGuessedWords, removeLetter, submitWord, keys]);

	const keyEl = keys.map((key) => {
		if (solution) {
			return <Key key={key} letter={key} />;
		}
	});

	return (
		<ul className="flex flex-wrap justify-center gap-2 max-w-[500px]">
			{keyEl}
		</ul>
	);
}
