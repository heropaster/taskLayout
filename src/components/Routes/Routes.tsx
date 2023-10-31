import { Stop } from "components/Stop/Stop";
import { useDataContext } from "context/DataContext";
import "./Routes.scss";

interface RoutesProps {
  type: string;
}

export const Routes: React.FC<RoutesProps> = ({ type }) => {
  const {
    state: { stopTimes, stops },
  } = useDataContext();
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
    <div key={type} className={`routes ${isLast ? "last-stops" : ""} `}>
      {displayedStops.map((stop, index) => (
        <Stop
          key={stop.index}
          time={String(stopTimes[index].time)}
          isFirst={index === 0}
          name={{ rus: stop.nameRus, eng: stop.nameEng }}
        />
      ))}
      <div className={`line ${isLast ? "last-stops" : ""}`}></div>
    </div>
  );
};
