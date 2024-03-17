import React, { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../utils/api";

export async function loader({ params }) {
  const id = params.id;
  return defer({ van: getVans(id) });
}

const VanDetail = () => {
  const dataPromise = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";

  const type = location.state?.type || "all";

  function renderedVanElement(van) {
    return (
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
    );
  }

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.van}>{renderedVanElement}</Await>;
      </Suspense>
    </div>
  );
};

export default VanDetail;
