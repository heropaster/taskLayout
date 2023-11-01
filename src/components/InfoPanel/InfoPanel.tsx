import { useDataContext } from "context/DataContext";
import { useState, useEffect } from "react";
import "./InfoPanel.scss";

export const InfoPanel = () => {
  const [time, setTime] = useState(new Date());
  const {
    state: { temp, speed },
  } = useDataContext();
  const date = new Date();

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 2000); // Обновление времени

    return () => clearInterval(timerID); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    <div className="panel">
      <span>
        {time.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <span>
        {date.toLocaleString("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </span>
      {temp && <span>{temp}°C</span>}
      {speed && <span>{speed} км/ч</span>}
    </div>
  );
};
