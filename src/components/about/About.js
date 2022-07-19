/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <h1>
          About <span>Me</span>
        </h1>
      </div>
      <div className="about-me">
        <div className="about-me-image">
          <img src={ME} alt="About Image" />
        </div>
        <p className="about-description">
          A hospital is a health care institution providing patient treatment
          with specialized health science and auxiliary healthcare staff and
          medical equipment. The best-known type of hospital is the general
          hospital, which typically has an emergency department to treat urgent
          health problems ranging from fire and accident victims to a sudden
          illness. A district hospital typically is the major health care
          facility in its region, with many beds for intensive care and
          additional beds for patients who need long-term care. Specialized
          hospitals include trauma centers, rehabilitation hospitals, children's
          hospitals, seniors' hospitals, and hospitals for dealing with specific
          medical needs such as psychiatric treatment and certain disease
          categories. Specialized hospitals can help reduce health care costs
          compared to general hospitals. Hospitals are classified as general,
          specialty, or government depending on the sources of income received.
        </p>
      </div>
      <div className="banner-readmore">Read More</div>
    </div>
  );
};

export default About;
