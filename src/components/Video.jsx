import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const demo = "https://youtu.be/aHzDQGc2LPE";
  const shortMovie = "https://www.youtube.com/watch?v=k6kCwj0Sk4s";

  return (
    <div>
      <div className="video-position">
        <ReactPlayer url={demo} controls width="80%" height="100%" />
      </div>
      <div className="video-position">
        <ReactPlayer url={shortMovie} controls width="80%" height="100%" />
      </div>
    </div>
  );
};

export default Video;
