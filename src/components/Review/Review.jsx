import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Review.css";
const Review = () => {
  return (
    <div className="review">
      <div className="customer">
        <div className="avatar">
          <img
            src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
            alt="review-avatar"
          />
        </div>
        <div className="avatar-details">
          <div className="info">
            <h4>Ashik Mahmud </h4>
            <small> Web Dev</small>
          </div>
          <div className="ratings">
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <span>5</span>
          </div>
        </div>
      </div>

      <div className="review-text">
        <p>
          Fabulous!!! It has chamber for every use i.e. Laptop, Tablet, Mobile,
          PowerBank, Note Book, Pen, Water bottle. Audio Jack & USB port. & in
          middle there is big space.
        </p>
      </div>
    </div>
  );
};

export default Review;
