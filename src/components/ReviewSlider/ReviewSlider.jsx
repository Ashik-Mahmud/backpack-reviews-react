import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReviewsContext } from "../../App";
import Review from "../Review/Review";
import "./ReviewSlider.css";
const ReviewSlider = () => {
  const navigate = useNavigate();
  const { reviews } = useContext(ReviewsContext);

  return (
    <section id="review-slider">
      <div className="container">
        <div className="title">
          <h2>
            Top <span className="colorize">Reviews</span>
          </h2>
          <p>Our custom says about my products</p>
        </div>
        <div className="reviews-content">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className="see-all-btn">
          <button onClick={() => navigate("/reviews")}>All Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
