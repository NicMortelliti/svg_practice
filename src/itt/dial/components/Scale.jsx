import React from "react";
import Ptr from "./Ptr";

const Scale = ({ x, y, radius, startAngle, endAngle, value, ...rest }) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = [
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
    <svg>
      <path stroke="white" strokeWidth="2" d={d} {...rest} />
      <Ptr x={x} y={y} radius={radius} value={value} />
    </svg>
  );
};

export default Scale;

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
