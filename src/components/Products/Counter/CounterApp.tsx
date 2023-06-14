import { useState, FC } from "react";
import { ButtonAction } from "../../../types/buttons";
import "./counter.styles.css";
import { v4 as uuidv4 } from "uuid";

const CounterApp: FC<ButtonAction> = ({ initialValue = 0 }) => {
	const [counter, setCounter] = useState<number>(initialValue);
	const id = uuidv4();

	const increaseValue = (): void => {		
		setCounter((prevState: number) => prevState + 1);
	};

	const substractValue = (): void => {
		if (counter === 0) return;
		setCounter((prevState: number) => prevState - 1);
	};

	const resetValue = (): void => {
		setCounter((initialValue = 0));
	};

	const buttons: ButtonAction[] = [
		{ label: "Increment", id: id, action: increaseValue, display: "+" },
		{ label: "Decrement", id: id, action: substractValue, display: "-" },
		{ label: "ResetValue", id: id, action: resetValue, display: "C" },
	];

	return (
		<>
			<div>{counter}</div>
			{buttons.map((button, id) => (
				<button
					key={id}
					className={`btn-counter btn-counter__${button.label.toLowerCase()}`}
					onClick={button.action}
				>
					{button.display}
				</button>
			))}
		</>
	);
};

export default CounterApp;
