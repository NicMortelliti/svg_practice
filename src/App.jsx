import React, { useState } from "react";
import "./App.css";
import Dial from "./itt/dial/Dial";

function App() {
  const [leftIttValue, setLeftIttValue] = useState(0);

  return (
    <div className="App">
      <Dial value={leftIttValue} />
    </div>
  );
}

export default App;
