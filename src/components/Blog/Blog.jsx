import React, { useState } from "react";
import { Fade } from "react-reveal";
import "./Blog.css";
const Blog = ({ blog }) => {
  const { question, answer, image } = blog;
  const [hide, setHide] = useState(false);
  return (
    <Fade top distance="30px">
      <div className="blog">
        <div className="image">
          <img src={image} alt="blog" />
        </div>
        <div className="blog-details">
          <h3>{question}</h3>
          <p>
            {answer.length > 200 ? (
              <>
                {hide ? answer : answer.slice(0, 200)}
                <span className="colorize" onClick={() => setHide(!hide)}>
                  {hide ? " see less" : " see more"}
                </span>
              </>
            ) : (
              answer
            )}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Blog;
