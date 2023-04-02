import React from "react";

const Arc = ({ start, startAngle, end, endAngle, radius }) => {
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const draw = [
    "M", // Move to
    start.x, // Start stroke at
    start.y, // Start stroke at
    "A", // Arc
    radius, // x-radius
    radius, // y-radius
    0,
    largeArcFlag,
    0,
    end.x, // End stroke at
    end.y, // End stroke at
  ].join(" ");

  return (
    <svg
      style={{
        border: "1px solid orange",
        position: "absolute",
        left: "85px",
        top: `${end.y}px`,
        width: `0`,
        height: "0",
        overflow: "visible",
      }}>
      <path stroke="white" strokeWidth="2" d={draw} fill="none" />
    </svg>
  );
};

export default Arc;
