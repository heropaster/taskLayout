import React from "react";

import "./Routes.scss";

import { Stop } from "../Stop/Stop";

import { useDataContext } from "../../context/DataContext";

interface RoutesProps {
  type: string;
}

export const Routes: React.FC<RoutesProps> = ({ type }) => {
  const state = useDataContext();
  const [stopTimes, stops] = [state?.state.stopTimes, state?.state.stops];
  const maxStops = type === "STOP_END" ? 4 : 3;

  // Если последние остановки - для стилизации вертикальной линии
  const isLast = stopTimes!.length <= 2 || stopTimes!.length === 3;
  // Если конечная
  const showLast = stopTimes!.length === 0 || stops?.length === 0;
  if (showLast) return <div className="last">Конечная</div>;

  // Отображение ограниченного числа остановок
  const displayedStops = stops!.slice(
    stopTimes![0].index,
    stopTimes![0].index + maxStops,
  );

  return (
    <div
      key={type}
      className={`routes ${type === "moving" ? "moving" : ""} ${
        isLast ? "last-stops" : ""
      } `}
    >
      {displayedStops.map((stop, index) => {
        return (
          <Stop
            key={stop.index}
            time={String(state?.state.stopTimes[index].time)}
            name={{ rus: stop.nameRus, eng: stop.nameEng }}
          />
        );
      })}
      <div className={`line ${isLast ? "last-stops" : ""}`}></div>
    </div>
  );
};
