import { createContext, ReactNode, useReducer, useContext } from "react";
import { Content } from "types/Content";
import { PulkovoT } from "types/PulkovoT";
import { Route } from "types/Route";
import { Stop } from "types/Stop";
import { StopTime } from "types/StopTime";
import { Stream } from "types/Stream";

type ContextActions = {
  type: string;
  payload: string;
};

interface ContextState {
  speed: string;
  index: number;
  action: string;
  currentStop: Stop | undefined;
  route: Route | undefined;
  stops: Stop[];
  stopTimes: StopTime[];
  content: Content | undefined;
  contentType: string;
  pulkovo: PulkovoT | undefined;
  isContentEnd: boolean;
  stream: Stream | undefined;
}
type Context = {
  state: ContextState;
  dispatch: React.Dispatch<ContextActions>;
};

function dataReducer(
  state: ContextState,
  action: ContextActions,
): ContextState {
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
      return { ...state, contentType: action.payload };
    case "UPDATE_PULKOVO":
      return { ...state, pulkovo: JSON.parse(action.payload) };
    case "UPDATE_CONTENT_END":
      return { ...state, isContentEnd: Boolean(action.payload) };
    case "UPDATE_STREAM":
      return { ...state, stream: JSON.parse(action.payload) };
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
    contentType: "assets",
    pulkovo: undefined,
    isContentEnd: false,
    // Заглушка для теста
    stream: {
      type: "PLAY_STREAM",
      url: "https://www.youtube.com/watch?v=4xDzrJKXOOY",
      format: "aasdasd",
      label: "asdasd",
      length: "15",
    },
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
