import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>"An Error occurred."</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};

export default Error;
