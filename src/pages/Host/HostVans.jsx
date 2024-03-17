import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const vans = fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  console.log(vans);

  const hostVanElements = vans.map((van) => (
    <Link
      key={van.id}
      to={`/host/vans/${van.id}`}
      className="host-van-link-wrapper"
    >
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
