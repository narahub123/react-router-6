import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../utils/api";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);

  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);

  useEffect(() => {
    async function loadedVans() {
      setLoading(true);
      const data = await getVans();
      setVans(data);
      setLoading(false);
    }

    loadedVans();
  }, []);

  // console.log(vans); // {vans: Array(6)}

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  // maping the data
  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
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

  function handlerFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <Link
            // to="?type=simple"
            onClick={() => handlerFilterChange("type", "simple")}
            className="van-type simple"
          >
            Simple
          </Link>
          <Link
            // to="?type=luxury"
            onClick={() => handlerFilterChange("type", "luxury")}
            className="van-type luxury"
          >
            Luxury
          </Link>
          <Link
            // to="?type=rugged"
            onClick={() => handlerFilterChange("type", "rugged")}
            className="van-type rugged"
          >
            Rugged
          </Link>
          <Link
            // to="."
            onClick={() => handlerFilterChange("type", null)}
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
