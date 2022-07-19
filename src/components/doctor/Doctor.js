/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./doctor.css";
import Image1 from "../../assets/Doctor1.jpg";
import Image2 from "../../assets/Doctor2.jpg";
import Image3 from "../../assets/Doctor3.jpg";
import Image4 from "../../assets/Doctor4.jpg";
import Image5 from "../../assets/Doctor5.jpg";
import Image6 from "../../assets/Doctor6.jpg";

const data = [
  {
    id: 1,
    image: Image1,
    name: "dr. ramesh chandra katragadda",
    title: "orthopaedic surgeon",
    description: "M.S.Ortho(Bom), D Ortho (CPS Bom) DNB Ortho",
  },
  {
    id: 2,
    image: Image2,
    name: "dr.j. madhusudan rao",
    title: "orthopaedic surgeon",
    description:
      "Mbbs (kmc, mangalore), d ortho (davangere), m ch (ortho), usaim",
  },
  {
    id: 3,
    image: Image3,
    name: "dr. bhupin singh bakshi",
    title: "Arthroscopy & Sports Medicine Specialist",
    description: "d Orthor, dnb ortho, fias (Sports Medicine)",
  },
  {
    id: 4,
    image: Image4,
    name: "dr. hemachand balla",
    title: "Orthopaedician",
    description: "d Ortho, dnb ortho",
  },
  {
    id: 5,
    image: Image5,
    name: "dr. sanjay tapadia",
    title: "Orthopaedic Surgeon",
    description: "mbbs, dna, m.ch - Orthopaedic",
  },
  {
    id: 6,
    image: Image6,
    name: "dr. ahmed mohiuddin",
    title: "Internal Medicine & Critical Care Specialist",
    description: "mbbs, md internal medicine",
  },
];

const Doctor = () => {
  return (
    <div id="doctor">
      <div className="doctor-container">
        <h1>
          <span>Our</span> Doctor
        </h1>
      </div>
      <div className="doctor-me">
        {data.map(({ id, image, name, title, description }) => {
          return (
            <div key={id} className="doctor-content">
              <div className="doctor-image">
                <img src={image} alt="title" />
              </div>
              <h1>{name}</h1>
              <h5>{title}</h5>
              <p className="doctor-description">{description}</p>
              <a href="#">View More</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctor;
