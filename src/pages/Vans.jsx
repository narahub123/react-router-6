import React, { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const vans = fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  // console.log(vans); // {vans: Array(6)}

  // maping the data
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price} <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <>
      <div className="van-list-container">
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
};

export default Vans;
