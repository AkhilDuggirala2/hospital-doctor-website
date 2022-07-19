/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./services.css";
import Image3 from "../../assets/img3.png";
import Image4 from "../../assets/img4.png";
import Image5 from "../../assets/img7.png";
import Image6 from "../../assets/img8.png";
import Image7 from "../../assets/img1.png";
import Image8 from "../../assets/img6.png";

const Services = () => {
  return (
    <div id="services">
      <div className="services-container">
        <h1>
          <span>Our</span>Services
        </h1>
      </div>
      <div className="service-me">
        <div className="service-image">
          <img src={Image3} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="service-image">
          <img src={Image4} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="service-image">
          <img src={Image5} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="service-image">
          <img src={Image6} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="service-image-1">
          <img src={Image7} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
        <div className="service-image-2">
          <img src={Image8} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et
            porro vitae corporis odio maxime.
          </p>
          <a href="#">View More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
