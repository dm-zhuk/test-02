import React from "react";

const ErrorHandle = ({ error }) => {
  const errorStyle = { padding: "24px 0", fontSize: "24px", color: "red" };

  return <>{error && <div style={errorStyle}>{error}</div>}</>;
};

export default ErrorHandle;
