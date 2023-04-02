import React, { useState } from "react";
import GlobalStyles from "./styles/Global";

// Features
import Itt from "./itt/Itt";

function App() {
  const [eicasValues, setEicasValues] = useState({
    itt: { left: 9, right: 120 },
  });

  return (
    <>
      <GlobalStyles />
      <Itt left={eicasValues.itt.left} right={eicasValues.itt.right} />
    </>
  );
}

export default App;
