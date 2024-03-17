import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  // console.log(params); // {id: '1'}
  const [van, setVan] = useState(null);
  useEffect(() => {
    const van = fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]); // how to decide the default value?

  console.log(van); // {id: '1', name: 'Modest Explorer', price: 60, description: 'The Modest Explorer is a van designed to get you o…our home and escape for a weekend or even longer!', imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png', …}

  return (
    <div className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
