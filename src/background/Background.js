import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";
import alof from "../assets/music/alof.mp3";
import lottieWeb from "https://cdn.skypack.dev/lottie-web";

import { useRef, useEffect } from "react";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <img z-index="-1000" src={fallbackImage} id="bg" alt="re"></img>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* <div id="audio1">
        <audio controls playsInline autoPlay loop preload="auto" hidden>
          <source src={alof} type="audio/mp3"></source>
        </audio>
      </div> */}
    </>
  );
};

export default Background;
