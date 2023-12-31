import React from "react";

const Container = ({ children }) => {
  return (
    <div className="card card-set" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
