import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.png";
import mu from "../assets/music/mu.mp3";
import lottieWeb from "https://cdn.skypack.dev/lottie-web";

import { useRef, useEffect } from "react";

const Background = () => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      console.log("butn clicked! event= ", event);
      let state = "play";

      if (state === "play") {
        animation.playSegments([14, 27], true);
        state = "pause";
      } else {
        animation.playSegments([0, 14], true);
        state = "play";
      }
    };
    const element = ref.current;
    element.addEventListener("click", handleClick);
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);
  //--------------------------------------------------------------------------
  // variable for the button that will contain both icons
  const playIconContainer = document.getElementById("play-icon");
  // variable that will store the button’s current state (play or pause)
  // let state = "play";

  // loads the animation that transitions the play icon into the pause icon into the referenced button, using Lottie’s loadAnimation() method
  const animation = lottieWeb.loadAnimation({
    container: playIconContainer,
    path: "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
    name: "Demo Animation",
  });

  animation.goToAndStop(14, true);

  // adds an event listener to the button so that when it is clicked, the the player toggles between play and pause
  // playIconContainer.addEventListener("click", () => {
  //   if (state === "play") {
  //     animation.playSegments([14, 27], true);
  //     state = "pause";
  //   } else {
  //     animation.playSegments([0, 14], true);
  //     state = "play";
  //   }
  // });

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

      {/* <audio controls playsInline autoPlay loop preload="auto">
        <source src={mu} type="audio/mp3"></source>
      </audio> */}
      <div id="audio1">
        <div id="audio-player-container">
          <p>Audio Player</p>
          <button id="play-icon" ref={ref}></button>
          <span id="current-time" class="time">
            0:00
          </span>
          <span id="duration" class="time">
            0:00
          </span>
        </div>
      </div>
    </>
  );
};

export default Background;
