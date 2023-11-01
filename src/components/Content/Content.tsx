import { Reception } from "components/Reception/Reception";
import { Stream } from "components/Stream/Stream";
import { Table } from "components/Table/Table";
import { Video } from "components/Video/Video";
import { useDataContext } from "context/DataContext";
import "./Content.scss";

export const Content = () => {
  const socketIP = import.meta.env.VITE_SOCKET_URL;

  const {
    state: { content, contentType, pulkovo, stream },
  } = useDataContext();

  switch (contentType) {
    case "assets":
      switch (content?.type) {
        case "PLAY_IMAGE": {
          return (
            <div
              className="display__info display__info--image"
              style={{
                backgroundImage: `url(http://${socketIP.trim()}:8080${content?.src})`,
              }}
            ></div>
          );
        }
        case "PLAY_VIDEO": {
          return <Video src={content.src} type="normal" />;
        }
      }
      break;
    case "pulkovo":
      switch (pulkovo?.subtype) {
        case "ARRIVAL": {
          return (
            <div
              key={pulkovo?.subtype}
              className="display__info display__info--pulkovo"
            >
              <Table
                table={pulkovo.contents}
                screen="ARRIVAL"
                duration={pulkovo.duration}
              />
            </div>
          );
        }
        case "DEPARTURE": {
          return (
            <div
              key={pulkovo?.subtype}
              className="display__info display__info--pulkovo"
            >
              <Table
                table={pulkovo.contents}
                screen="DEPARTURE"
                duration={pulkovo.duration}
              />
            </div>
          );
        }
        case "COUNTERS": {
          return (
            <Reception src={`http://${socketIP.trim()}:8080${pulkovo?.src}`} />
          );
        }
      }
      break;
    case "stream": {
      return <Stream src={stream!.url} length={stream!.length} />;
    }
  }
};
