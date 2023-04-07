import React from "react";
import ReactPlayer from "react-player";

export const Video = ({url}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <ReactPlayer
        style={{flexGrow: 1, maxWidth: "100%"}}
        url={url}
        controls={true}
      />
    </div>
  );
};
