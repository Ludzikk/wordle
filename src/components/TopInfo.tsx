import { useState, useEffect } from "react";
import { FaGithub, FaMoon } from "react-icons/fa";

type TopInfoProps = {
	toggleTutorialPopup: () => void;
};

export default function TopInfo({ toggleTutorialPopup }: TopInfoProps) {
	const [theme, setTheme] = useState<string>("light");

	function changeTheme() {
		if (theme === "light") {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	}

	useEffect(() => {
		const themeToSet = localStorage.getItem("theme");

		if (themeToSet === null) {
			localStorage.setItem("theme", "light");
			const themeFromStorage = localStorage.getItem("theme");

			if (themeFromStorage !== null) setTheme(themeFromStorage);
		} else {
			setTheme(themeToSet);
		}
	}, []);

	useEffect(() => {
		document.body.className = "";
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<div>
			<h1 className="font-bold text-2xl mt-4">Wordle</h1>
			<div className="flex justify-center gap-4 py-2 text-xl">
				<a
					href="https://github.com/Ludzikk"
					target="_blank"
					rel="noopener norefferer"
					className="hover:scale-[1.05] hover:opacity-80 duration-300">
					<FaGithub />
				</a>
				<button
					onClick={changeTheme}
					className="hover:scale-[1.05] hover:opacity-80 duration-300">
					<FaMoon />
				</button>
			</div>
			<button
				onClick={toggleTutorialPopup}
				className="hover:opacity-80 duration-300">
				How to play?
			</button>
		</div>
	);
}
