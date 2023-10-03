import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image.png";
import avatarImage2 from "../assets/avatar-image2.png";
import "../styles/avatar.css";
import "../styles/app.css";
// -- ------

import avatarImage8 from "../assets/avatar-image8.png";

import m1 from "../assets/grad/1.jpeg";
import m2 from "../assets/grad/2.jpeg";
import m3 from "../assets/grad/3.jpeg";
import m4 from "../assets/grad/4.jpeg";
import m5 from "../assets/grad/5.jpeg";
import m6 from "../assets/grad/6.jpeg";
import m7 from "../assets/grad/7.jpeg";

import "../../src/styles/app.css";

import w1 from "../assets/work/w1.jpg";
import w2 from "../assets/work/w2.jpeg";
import w3 from "../assets/work/w3.jpeg";
import w4 from "../assets/work/w4.jpeg";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      {page === "skills" && (
        <img src={avatarImage} className={avatarClass} alt="avatar" />
      )}
      {page !== "skills" && (
        <img src={avatarImage2} className={avatarClass} alt="avatar" />
      )}
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

// -----------------------------

const Imgs = ({ pref }) => {
  let p = "m";
  let flag;
  if (pref === "m" || pref === "") {
    flag = true;
    console.log("we are in education section ");
  } else {
    flag = false;
    console.log("we are in work section ");
    p = "w";
  }

  return (
    <>
      {flag === true && (
        // <div className="headerMarq">
        //   <div className="my">
        <section class="carousel" aria-label="G">
          <ol class="carousel__viewport">
            <li id="carousel__slide1" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <a href="#carousel__slide4" class="carousel__prev"></a>
                <a href="#carousel__slide2" class="carousel__next"></a>
              </div>
            </li>
            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide1" class="carousel__prev"></a>
              <a href="#carousel__slide3" class="carousel__next"></a>
            </li>
            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide2" class="carousel__prev"></a>
              <a href="#carousel__slide4" class="carousel__next"></a>
            </li>
            <li id="carousel__slide4" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide3" class="carousel__prev"></a>
              <a href="#carousel__slide1" class="carousel__next"></a>
            </li>
          </ol>
        </section>
        // {/* // <img src={m1} alt="1" />
        // // <img src={m2} alt="2" />
        // // <img src={m3} alt="3" />
        // // <img src={m4} alt="4" />
        // // <img src={m5} alt="5" />
        // // <img src={m6} alt="6" />
        // // <img src={m7} alt="7" /> */}
        //   </div>
        // </div>
      )}
      {!flag && (
        <section class="carousel edu" aria-label="G">
          <ol class="carousel__viewport">
            <li id="carousel__slide8" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper">
                <a href="#carousel__slide11" class="carousel__prev"></a>
                <a href="#carousel__slide9" class="carousel__next"></a>
              </div>
            </li>
            <li id="carousel__slide9" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide8" class="carousel__prev"></a>
              <a href="#carousel__slide10" class="carousel__next"></a>
            </li>
            <li id="carousel__slide10" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide9" class="carousel__prev"></a>
              <a href="#carousel__slide11" class="carousel__next"></a>
            </li>
            <li id="carousel__slide11" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <a href="#carousel__slide10" class="carousel__prev"></a>
              <a href="#carousel__slide8" class="carousel__next"></a>
            </li>
          </ol>
        </section>
        // <div className="headerMarq">
        //   <div className="my">
        // <img src={w1} alt="1" />
        // <img src={w2} alt="2" />
        // <img src={w3} alt="3" />
        // <img src={w4} alt="4" />
        //   </div>
        // </div>
      )}
    </>
  );
};
Imgs.propTypes = {
  pref: "",
};
//-----------------------------

export { Avatar, Imgs };
// export default Avatar;
