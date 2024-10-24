import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not found</h1>
      <p>Page does not exist, please modify your search</p>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
