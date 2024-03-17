import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    const van = fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  // console.log(currentVan);

  // validation
  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  // style for active
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}</h4>
            </div>
          </div>

          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              style={({ isActive }) => (isActive ? activeStyle : null)}
              end
            >
              Detail
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Photos
            </NavLink>
          </nav>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
