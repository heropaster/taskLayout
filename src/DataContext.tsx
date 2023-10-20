import React, { createContext, useContext, ReactNode, useReducer } from "react";

// Определите тип действия для обновления состояния
type DataAction = { type: "UPDATE_STATE"; payload: string };

// Определите начальное состояние
interface DataContextState {
	state1: string;
}
type Context = {
	state: DataContextState;
	dispatch: React.Dispatch<DataAction>;
};
// Создайте редюсер для обработки действий
function dataReducer(state: DataContextState, action: DataAction) {
	switch (action.type) {
		case "UPDATE_STATE":
			return { ...state, state1: action.payload };
		default:
			return state;
	}
}

const DataContext = createContext<Context | undefined>(undefined);

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(dataReducer, {
		state1: "Initial Value 1",
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
