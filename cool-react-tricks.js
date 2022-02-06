import React from "react";
import ReactDOM from "react-dom";

function clock() {
  const el = (
    <div>
      <h1>Clock</h1>
      <p>It is {new Date().toLocaleTimeString()}</p>
      <input type="text" />
    </div>
  );
  ReactDOM.render(el, document.getElementById("root"));
}

setInterval(clock, 1000);

// -------------------------

function Welcome() {
  const name = "John Doe";
  return <h1>Welcome {name}</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

//---------------------------

class WelcomeMessage extends React.Component {
  name = "Will Smith";
  render() {
    return <h1>Hello{this.name}</h1>;
  }
}

ReactDOM.render(<WelcomeMessage />, document.getElementById("root"));

//-----------------------

function Welcome(props) {
  return <h1>Welcome {props.user}</h1>;
}

ReactDOM.render(<Welcome user="John Doe" />, document.getElementById("root"));

// ---------------------------

function Welcome(props) {
  return <h1>Welcome {props.user} to this site</h1>;
}

const el = (
  <>
    <Welcome user="John Doe" />
    <Welcome user="Jane" />
    <Welcome user="Tom" />
  </>
);

ReactDOM.render(el, document.getElementById("root"));

//-------------------

function App() {
  const message = "Awesome website";
  return (
    <>
      <Welcome user="John Doe" message={message} />
      <Welcome user="Jane" message={message} />
      <Welcome user="Tom" />
    </>
  );
}

function Welcome(props) {
  return (
    <>
      <h1>Welcome {props.user} to this site.</h1>
      <p>{props.message}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//------------------------------

function App() {
  const [message, setMessage] = useState("Awesome website");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Bad website");
      console.log("updated");
    }, 2000);
  }, []);

  return (
    <>
      <Welcome user="John Doe" message={message} />
      <Welcome user="Jane" message={message} />
      <Welcome user="Tom" />
    </>
  );
}

function Welcome(props) {
  return (
    <>
      <h1>Welcome {props.user} to this site.</h1>
      <p>{props.message}</p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
