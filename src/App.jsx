import React, { useState } from "react";
import "./App.css";
import Dial from "./itt/dial/Dial";

function App() {
  const [eicasValues, setEicasValues] = useState({
    itt: { left: 0, right: 20 },
  });

  return (
    <div className="App">
      <Dial value={eicasValues.itt.left} />
      <Dial value={eicasValues.itt.right} />
    </div>
  );
}

export default App;
