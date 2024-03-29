import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "../assets/images/avatar-icon.png";

const Header = () => {
  return (
    <header>
      <Link className="site-logo">#VanLife</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
