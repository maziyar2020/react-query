import React from "react";
import { Outlet } from "react-router-dom";
// router
import { Link } from "react-router-dom";
// style
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <header className="nav">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/superheroes">Superheroes</Link>
          </li>
          <li>
            <Link to="/rq-superhero">RQ superHeroes</Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <header className="3"></header>
    </div>
  );
};

export default Dashboard;
