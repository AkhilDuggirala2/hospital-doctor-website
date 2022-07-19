import React from "react";
import "./contact.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-me">
          <h1>Quick Links</h1>
          <ul className="contact-link">
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#">Home</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#about">About</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#doctor">Doctor</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#services">Services</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#blog">Blog</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#book">Book</a>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact-services">
          <h1>Our Services</h1>
          <ul className="contact-links-1">
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Doctor</p>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Message Therapy</p>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Radiology</p>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Orthopaedic</p>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Sugury</p>
            </li>
            <li>
              <RiArrowRightSLine className="contact-icon" />
              <p>Ambulance Service</p>
            </li>
          </ul>
        </div>

        <div className="contact-info">
          <h1>Contact Info</h1>
          <ul className="contact-links-2">
            <li>
              <BsTelephoneFill className="contact-icon" />
              <p>+91040-1800-2323</p>
            </li>
            <li>
              <BsTelephoneFill className="contact-icon" />
              <p>+080-1800-2626</p>
            </li>
            <li>
              <GrMail className="contact-icon" />
              <p>Doctor123@gmail.com</p>
            </li>
            <li>
              <GrMail className="contact-icon" />
              <p>Doctor@hotmail.com</p>
            </li>
            <li>
              <MdLocationOn className="contact-icon-1" />
              <p>Vijayawada, India - 502355</p>
            </li>
          </ul>
        </div>
        <div className="contact-social">
          <h1>Follow Us</h1>
          <ul className="contact-link-3">
            <li>
              <FaFacebookF className="contact-icon" />
              <p>Facebook</p>
            </li>
            <li>
              <AiFillInstagram className="contact-icon" />
              <p>Instagram</p>
            </li>
            <li>
              <FaTwitter className="contact-icon" />
              <p>Twitter</p>
            </li>
            <li>
              <AiFillLinkedin className="contact-icon" />
              <p>Linkedin</p>
            </li>
            <li>
              <AiFillGithub className="contact-icon" />
              <p>Github</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
