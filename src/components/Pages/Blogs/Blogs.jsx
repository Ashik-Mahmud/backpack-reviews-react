import React from "react";
import Blog from "../../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  return (
    <section id="blogs">
      <div className="container">
        <div className="blog-title">
          <h2>Read Blog & Gether your Knowledge</h2>
          <p>Get knowledge to read bit of blog and spared around the world</p>
        </div>
        <div className="blog-container">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
