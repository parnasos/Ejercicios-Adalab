import React, { useState } from "react";
import Birthday2 from "./Birthday2";
import "../stylesheets/App.css";

const App = () => {
  const [number, setNumber] = useState(20);
  const [present, setPresent] = useState(0);
  const generateOneMore = () => number + 1;
  const generateOneMoreP = () => present + 1;

  const handleOneMore = () => {
    setNumber(generateOneMore());
  };
  const handleOneMoreP = () => {
    setPresent(generateOneMoreP());
  };

  return (
    <div className="App">
      <Birthday2
        getOneMore={handleOneMore}
        myAge={number}
        myPresents={present}
        getOneMoreP={handleOneMoreP}
      />
    </div>
  );
};

export default App;
