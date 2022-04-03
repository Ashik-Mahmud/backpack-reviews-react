import React, { useContext } from "react";
import { ReviewsContext } from "../../../App";
import Review from "./../../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const { reviews } = useContext(ReviewsContext);
  return (
    <section id="reviews">
      <div className="container">
        <div className="review-title">
          <h2>All the Customer Reviews</h2>
          <p>Get all the reviews which one say people about my product</p>
        </div>
        <div className="reviews-content">
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
