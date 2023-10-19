import { create } from "zustand";

interface Store {
	speed: string;
	setSpeed: (speed: string) => void;
}
export const useSpeedStore = create<Store>((set) => ({
	speed: "",
	setSpeed: (speed: string) => set({ speed: speed }),
}));
