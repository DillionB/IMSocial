import React, { useState } from "react";
import "./style.css";

const LikeButton = ({ isExpanded }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <div
      className={`heart-btn ${isLiked ? "heart-active" : ""} ${
        isExpanded ? "expanded-heart-button" : "heart-btn"
      }`}
      onClick={handleClick}
    >
      <div className="content">
        <span className={`heart ${isLiked ? "heart-active" : ""}`}></span>
        <span className="text">Like</span>
        <span className={`numb ${isLiked ? "heart-active" : ""}`}></span>
      </div>
    </div>
  );
};

export default LikeButton;
