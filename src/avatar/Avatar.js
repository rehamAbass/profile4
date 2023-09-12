import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image.png";
import avatarImage2 from "../assets/avatar-image2.png";
import "../styles/avatar.css";
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
        <div className="headerMarq">
          Memory of Graduation date :
          <div className="my">
            <img src={m1} alt="1" />
            <img src={m2} alt="2" />
            <img src={m3} alt="3" />
            <img src={m4} alt="4" />
            <img src={m5} alt="5" />
            <img src={m6} alt="6" />
            <img src={m7} alt="7" />
          </div>
        </div>
      )}
      {!flag && (
        <div className="headerMarq">
          Memory of Graduation date :
          <div className="my">
            <img src={w1} alt="1" />
            <img src={w2} alt="2" />
            <img src={w3} alt="3" />
            <img src={w4} alt="4" />
          </div>
        </div>
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
