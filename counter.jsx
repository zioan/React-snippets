import React, { useState } from "react";

// useState to create a counter
// styled
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const style = {
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div>
      <h3>Counter</h3>
      <div className="counter-div" style={style}>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
}
