import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <div className="image">
        <img
          src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/05/21113757/display-inline-block-css.png"
          alt="blog"
        />
      </div>
      <div className="blog-details">
        <h3>What is context api?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias commodi eveniet architecto libero aliquid delectus, vel, sit
          vitae, magni nemo aperiam voluptatibus iure. Dignissimos placeat amet
          odit ratione expedita! <small className="colorize">see more</small>
        </p>
      </div>
    </div>
  );
};

export default Blog;
