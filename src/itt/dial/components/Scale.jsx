import React from "react";
import Ptr from "./Ptr";
import polarToCartesian from "../../../helpers/calculators/polarToCartesian";
import Arc from "../../../helpers/svgs/Arc";

const Scale = ({ x, y, radius, startAngle, endAngle, value, ...rest }) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  return (
    <svg>
      <Arc
        start={start}
        startAngle={startAngle}
        end={end}
        endAngle={endAngle}
        radius={radius}
      />
      <Ptr x={x} y={y} radius={radius} value={value} />
    </svg>
  );
};

export default Scale;
