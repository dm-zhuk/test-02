import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not found</h1>
      <h2>Page does not exist, please modify your search</h2>
      <h3>
        <Link to="/">Back to the home page</Link>
      </h3>
    </div>
  );
};

export default NotFound;
