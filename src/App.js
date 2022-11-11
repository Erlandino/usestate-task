import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function changeNumber(choice) {
    setNumber((prevNumber) => (choice === "increment" ? prevNumber + 1 : prevNumber - 1));
  }
  return (
    <main className="main--container">
      <div className="main--container__buttons">
        <button onClick={() => changeNumber("increment")}>Increment +</button>
        <button onClick={() => changeNumber("reduce")}>Reduce -</button>
      </div>
      <p>{number}</p>
    </main>
  );
}

export default App;
