import React, { useState } from "react";
import Birthday from "./Birthday";

const App = () => {
  const [number, setNumber] = useState(20);
  const generateOneMore = () => number + 1;

  const handleOneMore = () => {
    setNumber(generateOneMore());
  };

  return (
    <div className="App">
      <Birthday getOneMore={handleOneMore} myAge={number} />
    </div>
  );
};

export default App;
