import React from "react";
import Error404 from "../../assets/image/error404.png";

const Error = () => {
  return (
    <div className="alert alert-danger">
      <img src={Error404} alt="error404" width="100%" />
      <p>La page n'existe pas</p>
    </div>
  );
};
export default Error;
