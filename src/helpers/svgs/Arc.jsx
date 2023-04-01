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

  return <path stroke="white" strokeWidth="2" d={draw} fill="none" />;
};

export default Arc;
