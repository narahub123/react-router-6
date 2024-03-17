import React from "react";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
        <Link to="/host/vans">Vans</Link>
        <Link to="/host/vans/:id">VansDetail</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
