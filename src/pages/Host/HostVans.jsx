import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requiredAuth } from "../../utils/requiredAuth";

export async function loader({ request }) {
  await requiredAuth(request);
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  console.log(vans);

  const hostVanElements = vans.map((van) => (
    <Link key={van.id} to={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>{van.price}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <h1 className="host-vans-title">Your Listed Vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default HostVans;
