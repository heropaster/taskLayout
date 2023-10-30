import { useState, useEffect } from "react";
import { Flight } from "types/Flight";
import { splitArray } from "utils/splitArray";
import arrival from "../../assets/icons/arrival.svg";
import departure from "../../assets/icons/departure.svg";
import "./Table.scss";

interface TableProps {
  table: Flight[];
  screen: string;
  duration: number;
}
export const Table: React.FC<TableProps> = ({ table, screen, duration }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const maxFlights = 7;
  const pages = splitArray(table, maxFlights);
  const pageDuration = Math.round((duration * 1000) / pages.length); //Время показа одной страницы

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPage < pages.length - 1) {
        setCurrentPage((page) => (page += 1));
      }
    }, pageDuration);

    return () => clearInterval(interval);
  }, [currentPage, pageDuration, pages.length]);
  return (
    <>
      <div className="pulkovo__header">
        {screen === "DEPARTURE" && (
          <>
            <img src={departure} alt="departure" />
            <h3>Вылеты</h3>
          </>
        )}
        {screen === "ARRIVAL" && (
          <>
            <img src={arrival} alt="arrival" />
            <h3>Прилёты</h3>
          </>
        )}
      </div>
      <div className="pulkovo__content"></div>
      <table>
        <thead>
          <tr>
            <th>Время</th>
            <th>Рейс</th>
            <th>Направление</th>
            <th>Авиакомпания</th>
            <th>Тип самолёта</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody key={currentPage}>
          {pages[currentPage].map((row, index) => (
            <tr key={index} className="flight">
              <td className="flight__time">{row.time}</td>
              <td className="flight__number">
                <div>
                  <span>{row.flightNumber}</span>
                </div>
              </td>
              <td className="flight__direction">{row.direction}</td>
              <td className="flight__company">{row.airline}</td>
              <td className="flight__airplane-type">{row.aircraftType}</td>
              <td
                className={`flight__status ${
                  row.status === "Прибыл" ? "arrived" : ""
                } ${row.status === "Задерживается" ? "delayed" : ""} `}
              >
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
