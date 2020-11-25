//App file
import React from "react";
import MyName from "./MyName";

function App() {
  const name = "Zioan";
  return (
    <div>
      <MyName name={name} />
    </div>
  );
}

export default App;

//Myname file
import React from "react";

function MyName({ name }) {
  return (
    <div>
      <h1>Hello, this is {name}!</h1>
    </div>
  );
}

export default MyName;
