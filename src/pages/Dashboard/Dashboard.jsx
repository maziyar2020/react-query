import React from "react";
import { Outlet } from "react-router-dom";
// router
import { NavLink } from "react-router-dom";
// style
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <header className="nav">
        <NavLink to="/" className="logo">
          Logo
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/superheroes">Superheroes</NavLink>
          </li>
          <li>
            <NavLink to="/rq-superhero">RQ superHeroes</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Dashboard;
