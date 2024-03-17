import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const vans = fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  // console.log(vans); // {vans: Array(6)}

  const typeFilter = searchParams.get("type");

  // console.log(typeFilter);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  // maping the data
  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <Link
            // to="?type=simple"
            onClick={() => setSearchParams({ type: "simple" })}
            className="van-type simple"
          >
            Simple
          </Link>
          <Link
            // to="?type=luxury"
            onClick={() => setSearchParams({ type: "luxury" })}
            className="van-type luxury"
          >
            Luxury
          </Link>
          <Link
            // to="?type=rugged"
            onClick={() => setSearchParams({ type: "rugged" })}
            className="van-type rugged"
          >
            Rugged
          </Link>
          <Link
            // to="."
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            Clear Filter
          </Link>
        </div>
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
};

export default Vans;
