// import { create } from "zustand";
// import type { Route } from "./types/Route";
// import type { Stop } from "./types/Stop";
// import type { StopTime } from "./types/StopTime";
// interface StoreState {
// 	speed: string;
// 	action: string;
// 	route: Route | undefined;
// 	stops: Stop[];
// 	currentStop: Stop | undefined;
// 	currentStopIndex: number;
// 	stopTimes: StopTime[];
// }
// interface StoreActions {
// 	setSpeed: (speed: string) => void;
// 	setAction: (action: string) => void;
// 	setRoute: (route: Route) => void;
// 	setStops: (stops: Stop[]) => void;
// 	setCurrentStop: (stop: Stop) => void;
// 	setCurrentStopIndex: (index: number) => void;
// 	setStopTimes: (stopTimes: StopTime[]) => void;
// }
// export const useDataStore = create<StoreState & StoreActions>((set) => ({
// 	speed: "",
// 	action: "",
// 	route: undefined,
// 	stops: [],
// 	currentStop: undefined,
// 	currentStopIndex: 0,
// 	stopTimes: [],
// 	setSpeed: (speed) => set({ speed }),
// 	setAction: (action) => set({ action }),
// 	setRoute: (route: Route) => set({ route }),
// 	setStops: (stops: Stop[]) => set({ stops }),
// 	setCurrentStop: (currentStop: Stop) => set({ currentStop }),
// 	setCurrentStopIndex: (currentStopIndex: number) => set({ currentStopIndex }),
// 	setStopTimes: (stopTimes: StopTime[]) => set({ stopTimes }),
// }));
