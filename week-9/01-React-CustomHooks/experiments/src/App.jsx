import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function useDebounce(value, timer) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		let timeoutValue = setTimeout(() => {
			setDebouncedValue(value);
		}, timer);

		return () => {
			clearTimeout(timeoutValue);
		};
	}, [value, timer]);

	return debouncedValue;
}

function App() {
	const [input, setInput] = useState("");
	const value = useDebounce(input, 1000);

	useEffect(() => {
		console.log("logging", value);
	}, [value]);

	return (
		<div className=" h-screen flex flex-col items-center justify-center text-center">
			Debounced value is {value}
			<input
				onChange={(e) => {
					setInput(e.target.value);
				}}
				className=" outline-none border-2 rounded-lg p-1"
			/>
		</div>
	);
}

export default App;
