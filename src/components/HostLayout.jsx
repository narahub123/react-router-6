import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
        <Link to=".">Dashboard</Link>
        <Link to="income">Income</Link>
        <Link to="vans">Vans</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
