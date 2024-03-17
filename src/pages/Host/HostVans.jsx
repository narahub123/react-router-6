import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../utils/api";
import { requiredAuth } from "../../utils/requiredAuth";

export async function loader({ request }) {
  await requiredAuth(request);
  return defer({ vans: getHostVans() });
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  function renderedVanElements(vans) {
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
    return <section>{hostVanElements}</section>;
  }

  return (
    <>
      <h1 className="host-vans-title">Your Listed Vans</h1>
      <div className="host-vans-list">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={dataPromise.vans}>{renderedVanElements}</Await>
        </Suspense>
      </div>
    </>
  );
};

export default HostVans;
