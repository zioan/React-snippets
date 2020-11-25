import React, { useState } from "react";
import FirstOption from "./optionItems/FirstOption";
import SecondOption from "./optionItems/SecondOption";

export default function Options() {
  const [active, setActive] = useState("FirstOption");
  return (
    <>
      <h2>Options</h2>
      <button onClick={() => setActive("FirstOption")}>First Option</button>
      <button onClick={() => setActive("SecondOption")}>Second Option</button>
      <div>
        {active === "FirstOption" && <FirstOption />}
        {active === "SecondOption" && <SecondOption />}
      </div>
    </>
  );
}
