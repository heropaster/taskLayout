import React, { createContext, useContext, ReactNode, useReducer } from "react";
import type { Stop } from "./types/Stop";
import type { Route } from "./types/Route";
import type { StopTime } from "./types/StopTime";
import type { Content } from "./types/Content";
import type { PulkovoT } from "./types/PulkovoT";

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
	route: Route | undefined;
	stops: Stop[];
	stopTimes: StopTime[];
	content: Content | undefined;
	isPulkovo: number;
	pulkovo: PulkovoT | undefined;
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
		case "UPDATE_ROUTE":
			return { ...state, route: JSON.parse(action.payload) };
		case "UPDATE_STOPS":
			return { ...state, stops: JSON.parse(action.payload) };
		case "UPDATE_STOP_TIMES":
			return { ...state, stopTimes: JSON.parse(action.payload) };
		case "UPDATE_CONTENT":
			return { ...state, content: JSON.parse(action.payload) };
		case "SWITCH_CONTENT":
			return { ...state, isPulkovo: Number(action.payload) };
		case "UPDATE_PULKOVO":
			return { ...state, pulkovo: JSON.parse(action.payload) };
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
		route: undefined,
		stops: [],
		stopTimes: [],
		content: undefined,
		isPulkovo: 0,
		pulkovo: undefined,
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
