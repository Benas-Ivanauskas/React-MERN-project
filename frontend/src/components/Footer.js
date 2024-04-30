import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
      <div className="footer-container">
        <div className="logo">
          <a href="#top">
            <svg
              width="40"
              height="40"
              viewBox="0 0 217 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_22_1296)">
                <path
                  d="M208.715 0.348319C208.612 0.380954 208.504 0.336028 208.402 0.373749L4.964 76.6629C2.73508 77.5013 1.15844 79.5187 0.885069 81.8904C0.6117 84.2622 1.68611 86.5839 3.67259 87.9062L48.2734 117.636L64.5899 185.813C64.6327 185.992 64.7429 186.135 64.8001 186.307C66.2666 190.78 71.8988 192.2 75.2683 188.83L107.185 156.914L156.251 189.625C159.806 192.009 164.707 190.229 165.893 186.08L216.752 8.07217C218.118 3.28121 213.62 -1.22663 208.715 0.348319ZM80.055 129.664C79.0022 130.731 78.6852 131.595 78.316 132.939C78.3114 132.964 78.3004 132.988 78.2957 133.012L71.2017 158.807L61.0942 116.571L159.56 49.0543L80.055 129.664Z"
                  fill="#1C3988"
                />
              </g>
              <defs>
                <clipPath id="clip0_22_1296">
                  <rect width="217" height="217" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="contacts">
          <h2>Kontaktai:</h2>
          <p>Telefonas: +370 123 45678</p>
          <p>El. paštas: info@example.com</p>
          <p>Adresas: Pvz. g. 123, Vilnius</p>
        </div>
      </div>
  );
};

export default Footer;
