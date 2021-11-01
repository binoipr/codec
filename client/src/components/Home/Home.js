import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-body">
      <Link to="/slotmachine" className="home-button">
        Slot Machine
      </Link>
      <Link to="/countries" className="home-button">
        Country List
      </Link>
      <Link to="/country/search" className="home-button">
        Search Country
      </Link>
    </div>
  );
};

export default Home;
