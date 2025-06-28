import React from "react";
import { FaStar } from "react-icons/fa";
import "./RatingComponent.css";

function RatingComponent({ rating }) {
  
  function getRatingLevel(rate) {
    if (rate > 4) return "good";
    if (rate > 3) return "avg";
    return "bad";
  }

  const ratingLevel = getRatingLevel(rating?.rate);
  return (
    <div className="rating-component">
      <FaStar className={`${ratingLevel}`}  />
      <p>{rating?.rate}</p>
      <p>({rating?.count})</p>
    </div>
  );
}

export default RatingComponent;
