import { Path } from "components/Path/Path";
import { RouteNumber } from "components/RouteNumber/RouteNumber";
import { StopName } from "components/StopName/StopName";
import { useDataContext } from "context/DataContext";
import "./RouteHeader.scss";

interface RouteHeaderProps {
  type: string;
}

export const RouteHeader: React.FC<RouteHeaderProps> = ({ type }) => {
  const state = useDataContext();
  const [currentStop, route, stops] = [
    state?.state.currentStop,
    state?.state.route,
    state?.state.stops,
  ];
  return (
    <div
      key={type}
      className={`header ${
        type === "STOP_BEGIN" ? "header--stopped" : "header--moving"
      }`}
    >
      {type === "STOP_BEGIN" ? (
        stops!.length > 0 && (
          <StopName
            type="header"
            name={{
              rus: currentStop!.nameRus,
              eng: currentStop!.nameEng,
            }}
          />
        )
      ) : (
        <>
          {/* Если в движении показываем другую шапку и маршрут */}
          <RouteNumber src={route?.icon} />
          {stops!.length > 0 && (
            <Path
              first={stops![0].nameRus}
              last={stops![stops!.length - 1].nameRus}
            />
          )}
        </>
      )}
    </div>
  );
};
