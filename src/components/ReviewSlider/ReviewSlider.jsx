import React from "react";
import { useNavigate } from "react-router-dom";
import Review from "../Review/Review";
import "./ReviewSlider.css";
const ReviewSlider = () => {
  const navigate = useNavigate();
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
          <Review />
          <Review />
          <Review />
        </div>
        <div className="see-all-btn">
          <button onClick={() => navigate("/reviews")}>All Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
