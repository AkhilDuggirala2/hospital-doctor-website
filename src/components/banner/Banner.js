/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./banner.css";
import Doctor from "../../assets/doctor.png";
import IMG1 from "../../assets/img7.png";
import IMG2 from "../../assets/img5.png";
import IMG3 from "../../assets/img1.png";
import IMG4 from "../../assets/img2.png";
import CountUp from "react-countup";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={Doctor} alt=" Doctor Image" />
      </div>
      <h1 className="banner-text">Making Health</h1>
      <h2 className="banner-headertext">Care Better Together</h2>
      <p className="banner-paragraph">
        Hospitals are typically funded by public funding, health organisations
        health insurance companies, or charities, including direct charitable
        donations. Historically, hospitals were often founded and funded by
        religious orders, or by charitable individuals and leaders.
      </p>

      <div className="banner-button">
        <a href="#" className="banner-appoint">
          Make a Appointment
        </a>
        <a href="#book" className="banner-department">
          View Department
        </a>
      </div>

      <div className="banner-hospital">
        <div className="banner-doctor">
          <img src={IMG1} alt="Doctor Images" />
          <h1>
            <CountUp end={1000} />
          </h1>
          <p>Doctors At Work</p>
        </div>
        <div className="banner-doctor">
          <img src={IMG2} alt="Doctor Images" />
          <h1>
            <CountUp end={5000} />+
          </h1>
          <p>Happy Patients</p>
        </div>
        <div className="banner-doctor-1">
          <img src={IMG3} alt="Doctor Images" />
          <h1>
            <CountUp end={10000} />+
          </h1>
          <p>Bed Facility</p>
        </div>
        <div className="banner-doctor">
          <img src={IMG4} alt="Doctor Images" />
          <h1>
            <CountUp end={100} />+
          </h1>
          <p>Hospital Availabe</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
