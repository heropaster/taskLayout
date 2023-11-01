import { useState } from "react";
import useWebSocket from "react-use-websocket";

import { RoutesDisplay } from "./components/RoutesDisplay/RoutesDisplay";
import { Content } from "./components/Content/Content";
import { Video } from "./components/Video/Video";
import { TextTicker } from "./components/TextTicker/TextTicker";

import { useDataContext } from "./context/DataContext";
import { endContent } from "./utils/contentEnd";

export const App = () => {
  const socketIP = import.meta.env.VITE_SOCKET_URL;
  const WS_URL = `ws://${socketIP.trim()}:23245`;
  const state = useDataContext();
  const dispatch = (action: string, payload: string) => {
    state?.dispatch({
      type: action,
      payload: payload,
    });
  };

  const [isFullVideo, setisFullVideo] = useState(false);
  const [fullVideoSrc, setFullVideoSrc] = useState("");
  const [isTicker, setIsTicker] = useState(false);
  const [tickerText, setTickerText] = useState("");
  const [videoDuration, setVideoDuration] = useState(0);

  useWebSocket(WS_URL, {
    onOpen: () => console.log("opened"),
    onMessage: (event) => {
      const parsedMessage = JSON.parse(event.data);
      console.log(parsedMessage);
      switch (parsedMessage.type) {
        // Инициализация маршрута
        case "ROUTE": {
          dispatch("UPDATE_STOPS", JSON.stringify(parsedMessage.stops));
          if (parsedMessage.stops[0] != undefined) {
            dispatch(
              "UPDATE_CURRENT_STOP",
              JSON.stringify(parsedMessage.stops[0]),
            );
          }
          dispatch("UPDATE_ROUTE", JSON.stringify(parsedMessage));
          break;
        }
        // Остановка
        case "STOP_END":
        case "STOP_BEGIN": {
          dispatch("UPDATE_CONTENT_END", "");
          dispatch("UPDATE_INDEX", String(parsedMessage.index));

          if (state?.state.stops[parsedMessage.index] !== undefined) {
            dispatch(
              "UPDATE_CURRENT_STOP",
              JSON.stringify(state?.state.stops[parsedMessage.index]),
            );
          }
          dispatch("UPDATE_ACTION", parsedMessage.type);
          break;
        }
        // Время до следующих остановок
        case "STOP_TIMES": {
          dispatch("UPDATE_STOP_TIMES", JSON.stringify(parsedMessage.stops));
          break;
        }
        // Скорость
        case "SPEED": {
          dispatch("UPDATE_SPEED", String(parsedMessage.speed));
          break;
        }
        case "TEMPERATURE": {
          dispatch("UPDATE_TEMPERATURE", String(parsedMessage.temperature));
          break;
        }
        // Обработка пакетов с картинкой/видео
        case "PLAY_IMAGE":
        case "PLAY_VIDEO": {
          dispatch("SWITCH_CONTENT", "assets");
          dispatch("UPDATE_CONTENT", JSON.stringify(parsedMessage));
          // Отправка сообщений по завершению проигрывания
          endContent(
            parsedMessage.length * 1000,
            `http://${socketIP.trim()}:8080${parsedMessage.src}`,
            parsedMessage.type,
          )
            ?.catch((error) => {
              console.log(error);
              // sendMessage(
              // 	JSON.stringify({
              // 		type: "ERROR",
              // 		label: parsedMessage.label,
              // 	})
              // );
              console.log("Ошибка");
              throw error;
            })
            ?.then((data) => {
              if (data === true || state?.state.isContentEnd) {
                // sendMessage(
                // 	JSON.stringify({
                // 		type: "COMPLETE",
                // 		label: parsedMessage.label,
                // 	})
                // );
                console.log("Отправил");
              }
            });
          break;
        }
        // Пакеты аэропорта
        case "PULKOVO": {
          dispatch("SWITCH_CONTENT", "pulkovo");
          dispatch("UPDATE_PULKOVO", JSON.stringify(parsedMessage));
          break;
        }
        // Обработка пакета с видео на весь экран
        case "PLAY_VIDEO_FULL": {
          setisFullVideo(true);
          setVideoDuration(parsedMessage.duration);
          setFullVideoSrc(parsedMessage.src);
          break;
        }
        // Обработка бегущей строки
        case "PLAY_TICKER": {
          setIsTicker(true);
          setTickerText(parsedMessage.text);
          break;
        }
        // Обработка стрима
        case "PLAY_STREAM": {
          dispatch("SWITCH_CONTENT", "stream");
          dispatch("UPDATE_STREAM", JSON.stringify(parsedMessage));
        }
      }
    },
  });

  return (
    <div className="display">
      <RoutesDisplay />
      <Content />
      {isFullVideo && (
        <Video
          src={fullVideoSrc}
          type="full"
          callback={() => setisFullVideo(false)}
          duration={videoDuration * 1000}
        />
      )}
      {isTicker && (
        <TextTicker text={tickerText} callback={() => setIsTicker(false)} />
      )}
    </div>
  );
};
