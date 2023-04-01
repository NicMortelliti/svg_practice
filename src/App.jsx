import React, { useState } from "react";
import Dial from "./itt/dial/Dial";
import GlobalStyles from "./styles/Global";

function App() {
  const [eicasValues, setEicasValues] = useState({
    itt: { left: 0, right: 20 },
  });

  return (
    <>
      <GlobalStyles />
      <Dial value={eicasValues.itt.left} />
      <Dial value={eicasValues.itt.right} />
    </>
  );
}

export default App;
