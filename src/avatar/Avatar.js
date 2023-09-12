import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/avatar-image.png";
import avatarImage2 from "../assets/avatar-image2.png";
import "../styles/avatar.css";

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

export default Avatar;
