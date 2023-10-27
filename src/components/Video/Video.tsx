import React from "react";
import { useDataContext } from "../../context/DataContext";
import "./Video.scss";

interface VideoProps {
  src: string;
  type: string;
  callback?: () => void;
  duration?: number;
}

export const Video: React.FC<VideoProps> = ({
  src,
  type,
  callback,
  duration,
}) => {
  const socketIP = import.meta.env.VITE_SOCKET_URL;

  const state = useDataContext();
  const dispatch = (action: string, payload: string) => {
    state?.dispatch({
      type: action,
      payload: payload,
    });
  };

  const callbackOnEnd = () => {
    dispatch("UPDATE_CONTENT_END", "true");
    callback?.();
  };
  if (duration) {
    setTimeout(() => {
      callbackOnEnd();
    }, duration);
  }
  return (
    <div className={`video-container ${type === "full" ? "full" : ""}`}>
      <video
        autoPlay={true}
        muted={true}
        onEnded={() => callbackOnEnd()}
        width={"100%"}
      >
        <source src={`http://${socketIP.trim()}:8080${src}`} type="video/mp4" />
      </video>
    </div>
  );
};
