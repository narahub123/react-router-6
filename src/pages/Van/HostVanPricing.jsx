import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext;

  return (
    <div className="host-van-price">
      ${currentVan.price} <span>/day</span>
    </div>
  );
};

export default HostVanPricing;
