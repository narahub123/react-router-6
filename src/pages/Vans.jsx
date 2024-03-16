import React, { useEffect, useState } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const vans = fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  console.log(vans);
  return <h1>Vans page goes here</h1>;
};

export default Vans;
