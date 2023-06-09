import React from "react";

// Components
import Scale from "./components/Scale";

const Dial = ({ value }) => {
  return (
    <Scale
      x={60}
      y={60}
      radius={50}
      startAngle={270}
      endAngle={30}
      value={value}
      fill="none"
    />
  );
};

export default Dial;
