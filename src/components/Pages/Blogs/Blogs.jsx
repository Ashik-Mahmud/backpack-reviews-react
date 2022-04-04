import React from "react";
import useBlogs from "../../../Hooks/useBlogs";
import Blog from "../../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  const [blogs] = useBlogs();
  return (
    <section id="blogs">
      <div className="container">
        <div className="blog-title">
          <h2>Read Blog & Gether your Knowledge</h2>
          <p>Get knowledge to read bit of blog and spared around the world</p>
        </div>

        <div className="blog-container">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
