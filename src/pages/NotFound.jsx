import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ margin: "240px" }}>
      <h1 style={{ color: "var(--color-btn)" }}>404 Not Found</h1>
      <h2 style={{ color: "var(--color-main)", padding: "48px 0 48px" }}>
        Page does not exist, please modify your search
      </h2>
      <h3>
        <Link to="/">← Back to the home page</Link>
      </h3>
    </div>
  );
};

export default NotFound;
