import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
const StarRatting = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)]?.map((star, i) => {
        const rattingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="input-star"
              value={rattingValue}
              onClick={() => setRating(rattingValue)}
            />
            <FaStar
              className="star"
              color={rattingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
              onMouseEnter={() => setHover(rattingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRatting;
