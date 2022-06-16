import Square from "./Square";
import React, { useEffect, useRef } from "react";

const RenderComponent = () => {
  const position = useRef(0);

  useEffect(() => {
    position.current = position.current >= 9 ? 0 : position.current + 1;
  });

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex" }}>
        {[...Array(10).keys()].map((n) => (
          <Square key={n} filled={n === position.current} />
        ))}
      </div>
    </div>
  );
};

export default RenderComponent;
