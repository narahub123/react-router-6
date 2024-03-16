import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="site-logo">#VanLife</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
};

export default Header;
