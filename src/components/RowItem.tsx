import { ReactNode } from "react";

type RowItemProps = {
	children: ReactNode;
	bgColor: string;
	letter: string;
};

export default function RowItem({ children, bgColor, letter }: RowItemProps) {
	let message = "";

	if (bgColor.includes("green")) {
		message = `${letter} in correct spot!`;
	} else if (bgColor.includes("orange")) {
		message = `${letter} in word but in different spot!`;
	} else if (bgColor.includes("gray")) {
		message = `${letter} not in word!`;
	} else {
		message = "";
	}

	return (
		<>
			<div
				className={`bg-white dark:bg-neutral-700 w-[60px] h-[60px] flex justify-center items-center text-3xl font-bold rounded-md uppercase [box-shadow:0_5px_5px_rgba(0,0,0,0.2)] ${bgColor}`}>
				{children}
			</div>
			
			{message ? (
				<div aria-live="polite" className="sr-only">
					{message}
				</div>
			) : null}
		</>
	);
}
