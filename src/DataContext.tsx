import React, { createContext, useContext, ReactNode, useReducer } from "react";
import type { Stop } from "./types/Stop";

// Типизация действий
type DataAction = {
	type: string;
	payload: string;
};

// Типы для стейтов
interface DataContextState {
	speed: string;
	index: number;
	action: string;
	currentStop: Stop | undefined;
}
type Context = {
	state: DataContextState;
	dispatch: React.Dispatch<DataAction>;
};

// Обработка действий
function dataReducer(
	state: DataContextState,
	action: DataAction
): DataContextState {
	switch (action.type) {
		case "UPDATE_SPEED":
			return { ...state, speed: action.payload };
		case "UPDATE_INDEX":
			return { ...state, index: Number(action.payload) };
		case "UPDATE_ACTION":
			return { ...state, action: action.payload };
		case "UPDATE_CURRENT_STOP":
			return { ...state, currentStop: JSON.parse(action.payload) };
		default:
			return state;
	}
}

const DataContext = createContext<Context | undefined>(undefined);

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(dataReducer, {
		speed: "",
		index: 0,
		action: "",
		currentStop: undefined,
	});

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => {
	return useContext(DataContext);
};
