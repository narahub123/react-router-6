import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
