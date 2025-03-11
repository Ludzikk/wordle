import { createContext, useEffect, useState } from "react";
import Keyboard from "./components/Keyboard";
import Row from "./components/Row";
import words from "./data/words.json";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import TopInfo from "./components/TopInfo";
import EndPopup from "./components/EndPopup";
import TutorialPopup from "./components/TutorialPopup";

type GameContextType = {
	solution: string | null;
	changeGuessedWords: (letter: string) => void;
	guessedAmount: number
	removeLetter: () => void;
	submitWord: () => void;
	guessedWords: null[] | string[]
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export default function App() {
	const [solution, setSolution] = useState<string | null>(null);
	const [guessedWords, setGuessedWords] = useState(Array(6).fill(null));
	const [guessedAmount, setGuessedAmount] = useState(0);
	const [playerWon, setPlayerWon] = useState<boolean | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [endPopup, setEndPopup] = useState(false);
	const [tutorialPopup, setTutorialPopup] = useState(false);

	const { width, height } = useWindowSize();

	const rowsEl = guessedWords.map((word, index) => {
		if (word) {
			return <Row key={index} word={word} index={index} />;
		} else {
			return <Row key={index} word="" index={index} />;
		}
	});

	function changeGuessedWords(letter: string) {
		setGuessedWords((prevVal) => {
			if (guessedAmount === 6) return prevVal;

			if (playerWon === true || playerWon === false) return prevVal;

			const newArr = [...prevVal];

			if (newArr[guessedAmount] && newArr[guessedAmount].length < 5) {
				newArr[guessedAmount] += letter;
			} else if (newArr[guessedAmount] && newArr[guessedAmount].length === 5) {
				return prevVal;
			} else {
				newArr[guessedAmount] = letter;
			}

			return newArr;
		});
	}

	function removeLetter() {
		if (error) {
			setError(null);
		}

		setGuessedWords((prevVal) => {
			const newArr = [...prevVal];
			newArr[guessedAmount] = newArr[guessedAmount].slice(0, -1);
			return newArr;
		});
	}

	function submitWord() {
		if (
			guessedWords[guessedAmount] &&
			guessedWords[guessedAmount].length === 5
		) {
			if (words.includes(guessedWords[guessedAmount])) {
				setGuessedAmount((prevVal) => prevVal + 1);
			} else {
				setError("Word incorrect!");
			}
		}
	}

	function getRandomWord() {
		const randomNumFromWordsList = Math.floor(Math.random() * words.length);
		setSolution(words[randomNumFromWordsList]);
	}

	function resetGame() {
		setEndPopup(false);
		setError(null);
		setPlayerWon(null);
		setGuessedAmount(0);
		setGuessedWords(Array(6).fill(null));
		getRandomWord();
	}

	function toggleTutorialPopup() {
		setTutorialPopup((prevVal) => !prevVal);
	}

	useEffect(() => {
		getRandomWord();
	}, []);

	useEffect(() => {
		if (solution) {
			if (guessedAmount === 6) setPlayerWon(false);

			const filteredLength = guessedWords.filter((word) => word).length;

			if (guessedWords.includes(solution) && filteredLength === guessedAmount)
				setPlayerWon(true);
		}
	}, [guessedAmount, solution, guessedWords]);

	useEffect(() => {
		if (playerWon || playerWon === false) {
			setTimeout(() => {
				setEndPopup(true);
			}, 5000);
		}
	}, [playerWon]);

	return (
		<GameContext.Provider
			value={{
				solution,
				changeGuessedWords,
				guessedAmount,
				removeLetter,
				submitWord,
				guessedWords
			}}>
			<div className="flex flex-col items-center justify-center min-h-[100vh] pb-6 bg-white dark:bg-neutral-800 dark:text-white">
				<TopInfo toggleTutorialPopup={toggleTutorialPopup} />
				{tutorialPopup ? (
					<TutorialPopup toggleTutorialPopup={toggleTutorialPopup} />
				) : null}
				<div className="h-[44px] py-2">
					{playerWon === false ? (
						<p className="font-bold">Word was: {solution}</p>
					) : null}
					{error ? (
						<p className="h-[44px] text-red-600 font-bold">{error}</p>
					) : null}
				</div>
				{playerWon ? <Confetti width={width} height={height} /> : null}
				<div className="flex flex-col gap-2 mb-6 relative">
					{rowsEl}
					{endPopup ? <EndPopup resetGame={resetGame} /> : null}
				</div>
				<Keyboard />
			</div>
		</GameContext.Provider>
	);
}

export { GameContext };
