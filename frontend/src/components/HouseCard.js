import React from "react";
import { Link } from "react-router-dom";

const HouseCard = ({ kambarys }) => {
  console.log(kambarys);
  return (
    <div>
      <Link to={`details/${kambarys._id}`}>
        <div className="house">
          <img src={kambarys.nuotrauka} alt={kambarys.pavadinimas} />
          <h2 className="description">{kambarys.pavadinimas}</h2>
          <p className="price">€{kambarys.kaina} už naktį</p>
          <div className="locationRoom">
            <p className="location">{kambarys.vieta}</p>
            <p className="room">
              {kambarys.kambariai}{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
              </svg>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HouseCard;
