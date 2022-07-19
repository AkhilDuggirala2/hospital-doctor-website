/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./book.css";
import Book1 from "../../assets/book.png";

const Book = () => {
  return (
    <div id="book">
      <div className="book-container">
        <h1>
          <span>Our</span>Book
        </h1>
      </div>
      <div className="book-me">
        <div className="book-image">
          <img src={Book1} alt="" />
        </div>
        <form>
          <h1 className="book-text">Book Appointment</h1>
          <input
            className="book-input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <br />
          <input
            className="book-email"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <br />
          <input
            className="book-password"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <br />
          <textarea
            className="book-message"
            name="message"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <div className="book-submit">
            <a href="#">Send Message</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
