type EndPopupProps = {
	resetGame: () => void
}

export default function EndPopup({resetGame}: EndPopupProps) {
	return (
		<div className="absolute top-1/2 left-1/2 w-[80%] h-[40%] [transform:translate(-50%,-50%)] bg-black/50 flex justify-center items-center">
			<button onClick={resetGame} className="bg-white dark:bg-neutral-600 py-2 px-6 rounded-md font-bold">New game</button>
		</div>
	);
}
