import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <Fade left distance="100px">
            <div className="hero-text">
              <h3>Get you backPack now</h3>
              <h1>
                Best Backpack <span className="colorize">Top Reviews</span>
              </h1>
              <p>
                This is a top reviewed backpack of my shops If you want to check
                the all of reviews in terms of this back please
                <Link className="colorize" to="/reviews">
                  checkout
                </Link>
              </p>
              <button onClick={() => navigate("/dashboard")}>
                Get Analytics
              </button>
            </div>
          </Fade>
          <div className="hero-image">
            <Zoom right>
              <img
                src="https://static-01.daraz.com.bd/p/91cf366fc3774fa91b91ebc98db25b96.jpg"
                alt="backpack"
              />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
