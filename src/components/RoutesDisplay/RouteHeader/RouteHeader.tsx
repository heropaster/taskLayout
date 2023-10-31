import { Path } from "components/Path/Path";
import { RouteNumber } from "components/RouteNumber/RouteNumber";
import { StopName } from "components/StopName/StopName";
import { useDataContext } from "context/DataContext";
import "./RouteHeader.scss";

export const RouteHeader = () => {
  const {
    state: { currentStop, route, stops, action },
  } = useDataContext();

  const styles = {
    header: {
      background: route?.color,
      color: route?.fontColor,
    },
  };
  return (
    <div
      key={action}
      style={action === "STOP_BEGIN" ? styles.header : undefined}
      className={`header ${
        action === "STOP_BEGIN" ? "header--stopped" : "header--moving"
      }`}
    >
      {action === "STOP_BEGIN" ? (
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
