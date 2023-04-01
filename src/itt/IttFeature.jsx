import React from "react";

import { SingleLgDialCont } from "../styles/Containers.styled";
import Dial from "./dial/Dial";
import Rdo from "./rdo/rdo";

const IttFeature = ({ value, right = false }) => {
  return (
    <SingleLgDialCont right={right}>
      <Dial value={value} />
      <Rdo value={value} />
    </SingleLgDialCont>
  );
};

export default IttFeature;
