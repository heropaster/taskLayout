import { ArrivalTime } from "components/ArrivalTIme/ArrivalTime";
import { StopName } from "components/StopName/StopName";
import { StopNameT } from "types/StopName";
import "./Stop.scss";
import { useDataContext } from "context/DataContext";

interface StopProps {
  name: StopNameT;
  time: string;
  isFirst: boolean;
}

export const Stop: React.FC<StopProps> = ({ name, time, isFirst }) => {
  const state = useDataContext();
  const route = state?.state.route;
  const styles = {
    first: {
      background: route?.color,
      color: route?.fontColor,
    },
  };
  return (
    <div className={`stop`}>
      <ArrivalTime time={time} circle={styles.first.background} />
      <StopName
        name={name}
        type="RouteStop"
        style={isFirst ? styles.first : undefined}
      />
    </div>
  );
};
