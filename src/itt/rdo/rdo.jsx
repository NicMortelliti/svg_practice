import React from "react";

import { LargeRdo } from "../../styles/Readouts.styled";

const Rdo = ({ value }) => {
  return <LargeRdo rdoLength={3}>{value}</LargeRdo>;
};

export default Rdo;
