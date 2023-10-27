import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDataContext } from "../../DataContext";
import "./Stream.scss";

interface StreamProps {
  src?: string;
  length: string;
}

export const Stream: React.FC<StreamProps> = ({
  src = "https://www.youtube.com/watch?v=jfKfPfyJRdk",
  length,
}) => {
  const state = useDataContext();
  const dispatch = (action: string, payload: string) => {
    state?.dispatch({
      type: action,
      payload: payload,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => dispatch("SWITCH_CONTENT", "assets"),
      Number(length) * 1000,
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="stream-container">
      <ReactPlayer
        url={src}
        playing={true}
        width="100%"
        height="100%"
        volume={0}
        muted={true}
      />
    </div>
  );
};
