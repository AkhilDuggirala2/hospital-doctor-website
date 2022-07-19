import React from "react";
import "./blog.css";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";

const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <h1>
          <span>Our</span>Blog
        </h1>
      </div>
      <div className="blog-me">
        <div className="blog-image">
          <img src={Blog1} alt="" />
          <h3 className="blog-header">Covid-19 Lab Test</h3>
          <p className="blog-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae asperiores impedit voluptatum praesentium labore
            ratione? Alias veritatis deleniti quasi atque.
          </p>
          <div className="blog-btn">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="blog-image">
          <img src={Blog2} alt="" />
          <h3 className="blog-header">Covid-19 Lab Checked</h3>
          <p className="blog-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae asperiores impedit voluptatum praesentium labore
            ratione? Alias veritatis deleniti quasi atque.
          </p>
          <div className="blog-btn">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="blog-image">
          <img src={Blog3} alt="" />
          <h3 className="blog-header">Covid-19 Blood Test</h3>
          <p className="blog-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae asperiores impedit voluptatum praesentium labore
            ratione? Alias veritatis deleniti quasi atque.
          </p>
          <div className="blog-btn">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
