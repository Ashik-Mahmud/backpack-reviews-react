import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";
const Review = ({ review }) => {
  const { name, designation, avatar, ratings, review: reviewText } = review;

  let starsCount = [];
  for (let i = 0; i < ratings; i++) {
    starsCount.push(i);
  }

  return (
    <div className="review">
      <div className="customer">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="avatar-details">
          <div className="info">
            <h4>{name} </h4>
            <small> {designation}</small>
          </div>
          <div className="ratings">
            <div className="stars">
              {starsCount.map((count) => (
                <AiFillStar key={count} />
              ))}
            </div>
            <span>{ratings}</span>
          </div>
        </div>
      </div>

      <div className="review-text">
        <p>{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
