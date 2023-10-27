import type { Flight } from "./Flight";
export type PulkovoT = {
  type: string;
  subtype: string;
  duration: number;
  color: string;
  contents: Flight[];
  src?: string;
};
