/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div>
      <div className={`header-container ${show && "header-black"}`}>
        <img className="header-logo" src={Logo} alt="logo" />
        <nav className="navbar-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#doctor">Doctor</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#book">Book</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
