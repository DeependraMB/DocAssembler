import React from "react";
import { useEffect, useState } from "react";
import "./FrontBanner.css";
import { Link } from "react-router-dom";

const imageUrls = [
  "https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function FrontBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrls[currentImageIndex]})`,
    animation: "fade 1s linear forwards",
  };

  return (
    <div className="container">
      <div className="offerbanner-container" style={backgroundImageStyle}>
        <p>
        Tech-Powered PDF Mastery
          <br />
          Select, Extract, Innovate
        </p>
        <h4>
          Inspiring Connections: Empowering through Technology
          <br />
          Unlocking Potential, Enabling Progress: Embrace the Power of
          Technology
        </h4>
        <Link
          className="btn btn-lg btn-outline-light" to="/signup"
          style={{ width: "250px", height: "50px", fontWeight: "900", color: "black " }}
        >
          SignUp
        </Link>
      </div>
    </div>
  );
}

export default FrontBanner;
