import React from "react";
import Review from "./../../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="review-title">
          <h2>All the Customer Reviews</h2>
          <p>Get all the reviews which one say people about my product</p>
        </div>
        <div className="reviews-content">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
