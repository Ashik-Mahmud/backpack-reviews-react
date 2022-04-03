import React from "react";
import Hero from "../../Hero/Hero";
import ReviewSlider from "../../ReviewSlider/ReviewSlider";
import "./Home.css";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <ReviewSlider />
    </section>
  );
};

export default Home;
