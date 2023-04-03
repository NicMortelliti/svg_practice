import React from "react";
import Ptr from "./Ptr";
import polarToCartesian from "../../../helpers/calculators/polarToCartesian";
import Arc from "../../../helpers/svgs/Arc";

const Scale = ({ x, y, radius, startAngle, endAngle, value }) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  return (
    <>
      <Arc
        start={start}
        startAngle={startAngle}
        end={end}
        endAngle={endAngle}
        radius={radius}
        x={x}
        y={y}
      />
      <Ptr x={x} y={y} radius={radius} value={value} />
    </>
  );
};

export default Scale;
