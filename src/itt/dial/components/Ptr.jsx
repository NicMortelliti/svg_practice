import React from "react";

const Ptr = ({ x, y, radius, value }) => {
  const points = [`0,5`, `0,-5`, `${-radius},0`];

  return (
    <svg
      style={{
        position: "absolute",
        border: "1px solid pink",
        overflow: "visible",
      }}>
      {/* <g transform={`translate(${x}, ${y}) rotate(${value})`}> */}
      <circle cx={0} cy={0} r="5" fill="green" stroke="green" strokeWidth={2} />
      <polygon
        points={points.join(" ")}
        fill="green"
        stroke="green"
        strokeWidth={2}
      />
      <circle cx={0} cy={0} r="2" fill="red" strokeWidth={2} />
      {/* </g> */}
    </svg>
  );
};

export default Ptr;
