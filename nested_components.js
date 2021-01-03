import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h4>First component</h4>;

const Message = () => {
  return <p>This is the message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
