import { FaXmark } from "react-icons/fa6";

type TutorialPopupProps = {
	toggleTutorialPopup: () => void
}

export default function TutorialPopup({toggleTutorialPopup}: TutorialPopupProps) {
	return (
		<div className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] max-w-[500px] min-w-[300px] bg-white dark:bg-neutral-800 p-4 px-8 z-10 [box-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
			<h2 className="pb-6">
				<p className="font-bold text-2xl">How to play</p>
				<p className="text-lg">Guess the Wordle in 6 tries.</p>
			</h2>
			<button onClick={toggleTutorialPopup}>
				<FaXmark className="absolute top-0 right-0 m-4 text-2xl" />
			</button>
			<ul className="list-disc">
				<li>
					<p>Each guess must be a valid 5-letter word.</p>
				</li>
				<li>
					<p>
						The color of the tiles will change to show how close your guess was
						to the word.
					</p>
				</li>
			</ul>
			<h3 className="font-bold text-lg pt-4">Examples</h3>
			<div className="flex gap-1 py-2">
				<div className="w-[30px] h-[30px] bg-green-400 font-bold flex justify-center items-center text-lg">
					W
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					O
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					R
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					L
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					D
				</div>
			</div>
			<p>
				<span className="font-bold">W</span> is in the word and in the correct
				spot.
			</p>
			<div className="flex gap-1 py-2">
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					W
				</div>
				<div className="w-[30px] h-[30px] bg-orange-400 font-bold flex justify-center items-center text-lg">
					O
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					R
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					L
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					D
				</div>
			</div>
			<p>
				<span className="font-bold">O</span> is in the word but in the wrong
				spot.
			</p>
			<div className="flex gap-1 py-2">
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					W
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					O
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					R
				</div>
				<div className="w-[30px] h-[30px] dark:bg-white bg-neutral-700 text-white dark:text-black font-bold flex justify-center items-center text-lg">
					L
				</div>
				<div className="w-[30px] h-[30px] bg-gray-400 font-bold flex justify-center items-center text-lg">
					D
				</div>
			</div>
			<p>
				<span className="font-bold">D</span> is not in the word in any spot.
			</p>
		</div>
	);
}
