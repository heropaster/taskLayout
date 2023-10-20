import React, { createContext, useContext, ReactNode, useReducer } from "react";

// Типизация действий
type DataAction = {
	type: string;
	payload: string;
};

// Типы для стейтов
interface DataContextState {
	speed: string;
	index: number;
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
