import { Flight } from "types/Flight";

export const splitArray = (array: Flight[], maxlength: number) => {
  const splittedArray = [];
  for (let i = 0; i < array.length; i += maxlength) {
    splittedArray.push(array.slice(i, i + maxlength));
  }
  return splittedArray;
};
