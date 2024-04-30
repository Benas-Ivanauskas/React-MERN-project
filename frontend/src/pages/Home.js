import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <h1 className="headers">VILNIUS RENTALS</h1>
        <h2 className="headers">Nuoma moderniuose apartamentuose</h2>
        <p>
        Mes suteikiame unikalias būsto nuomos paslaugas, pradedant Vilniaus regione ir plėtojant veiklą į urbanistines bei priemiesčio teritorijas.
        </p>
        <Link to="/home-houses">
          <button className="btn-active">Ieškoti skelbimo</button>
        </Link>
      </div>
      <img src="home.jpg" className="apartment" alt="apartment" />
    </div>
  );
};

export default Home;
