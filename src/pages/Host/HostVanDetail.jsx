import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    const van = fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  console.log(currentVan);

  // validation
  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
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
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
