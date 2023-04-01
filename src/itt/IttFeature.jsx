import React from "react";

import { SingleLgDialCont } from "../styles/Containers.styled";
import Dial from "./dial/Dial";
import Rdo from "./rdo/rdo";

const IttFeature = ({ value }) => {
  return (
    <SingleLgDialCont>
      <Dial value={value} />
      <Rdo value={value} />
    </SingleLgDialCont>
  );
};

export default IttFeature;
