import React, { Suspense } from "react";
import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getHostVans } from "../../utils/api";
import { requiredAuth } from "../../utils/requiredAuth";

export async function loader({ params, request }) {
  await requiredAuth(request);
  const id = params.id;
  return defer({ van: getHostVans(id) });
}

const HostVanDetail = () => {
  const dataPromise = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function renderedVanElement(currentVan) {
    return (
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

        <Outlet context={{ currentVan }} />
      </div>
    );
  }

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={dataPromise.van}>{renderedVanElement}</Await>
        </Suspense>
      </section>
    </>
  );
};

export default HostVanDetail;
