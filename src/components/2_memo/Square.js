import React from "react";

const Square = ({ filled }) => {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        margin: "2px",
        backgroundColor: filled ? "gray" : "white",
        border: "1px solid grey",
      }}
    ></div>
  );
};

export default Square;
