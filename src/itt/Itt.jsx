import React from "react";

import { DualLgDialCont } from "../styles/Containers.styled";
import IttFeature from "./IttFeature";

const Itt = ({ left, right }) => {
  return (
    <DualLgDialCont>
      <IttFeature value={left} />
      <IttFeature value={right} right />
    </DualLgDialCont>
  );
};

export default Itt;
