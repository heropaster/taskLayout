import { StopNameT } from "types/StopName";
import "./StopName.scss";

interface StopNameProps {
  type: string | undefined;
  name: StopNameT;
  style?: {
    background: string | undefined;
    color: string | undefined;
  };
}

export const StopName: React.FC<StopNameProps> = ({ type, name, style }) => (
  <div className="stop-title">
    {type === "RouteStop" ? (
      <div className="routeStop" style={style}>
        <h2 className={`stop-name ${type === "RouteStop" ? "route-stop" : ""}`}>
          {name.rus}
        </h2>
        <h3
          className={`stop-name stop-name--eng ${
            type === "RouteStop" ? "route-stop--eng" : ""
          }`}
        >
          {name.eng}
        </h3>
      </div>
    ) : (
      <>
        <h2 className={`stop-name`}>{name.rus}</h2>
        <h3 className={`stop-name stop-name--eng`}>{name.eng}</h3>
      </>
    )}
  </div>
);
