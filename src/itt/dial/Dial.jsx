import React from "react";

// Components
import Scale from "./components/Scale";

const Dial = () => {
  return (
    <Scale
      x={60}
      y={60}
      radius={50}
      startAngle={270}
      endAngle={30}
      fill="none"
    />
  );
};

export default Dial;
