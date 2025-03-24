import React from "react";
import YouTube from "react-youtube";
const getYouTubeVideoId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

export default function VideoPlayer ({ videoUrl,setWidth,setHeigh }){
  const videoId = getYouTubeVideoId(videoUrl);
  const opts = {
    height: setHeigh,
    width: setWidth,
    playerVars: {
      autoplay: 1,
    },
  };
  return videoId ? <YouTube videoId={videoId} opts={opts} /> : <p>Invalid YouTube URL</p>;
};


