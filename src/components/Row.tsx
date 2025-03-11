import { useContext } from "react";
import RowItem from "./RowItem";
import { GameContext } from "../App";

type RowProps = {
	word: string
	index: number
}

export default function Row({ word, index }: RowProps) {
	const gameContext = useContext(GameContext);
	const solution = gameContext?.solution?.split("");
	const guessedAmount = gameContext?.guessedAmount;
	const tiles = [];

	for (let i = 0; i < 5; i++) {
		if (solution && guessedAmount && index < guessedAmount) {
			const bgColor =
				solution[i] === word[i]
					? `show-green-${i}`
					: solution.includes(word[i])
					? `show-orange-${i}`
					: `show-gray-${i}`;

			tiles.push(<RowItem key={index + "-" + i} letter={word[i]} bgColor={bgColor}>{word[i]}</RowItem>);
		} else {
			tiles.push(<RowItem key={index + "-" + i} letter={word[i]} bgColor="">{word[i]}</RowItem>);
		}
	}

	return <div className="flex gap-2">{tiles}</div>;
}
