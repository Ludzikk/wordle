import { ReactNode } from "react";

type RowItemProps ={
	children: ReactNode,
	bgColor: string
}

export default function RowItem({ children, bgColor }: RowItemProps) {
	return (
		<div className={`bg-white dark:bg-neutral-700 w-[60px] h-[60px] flex justify-center items-center text-3xl font-bold rounded-md uppercase [box-shadow:0_5px_5px_rgba(0,0,0,0.2)] ${bgColor}`}>
			{children}
		</div>
	);
}
