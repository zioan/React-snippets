//-------------cool example -> clock--------------------

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return <Clock time={time} />;
}

function Clock(props) {
  return <p>It's currently{props.time}</p>;
}

ReactDOM.render(<App />, document.getElementById("root"));

// --------react function component-----------------

function Welcome() {
  const name = "John Doe";
  return <h1>Welcome {name}</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

//-------------react class component--------------

class WelcomeMessage extends React.Component {
  name = "Will Smith";
  render() {
    return <h1>Hello{this.name}</h1>;
  }
}

ReactDOM.render(<WelcomeMessage />, document.getElementById("root"));

//----------using props-------------

function Welcome(props) {
  return <h1>Welcome {props.user}</h1>;
}

ReactDOM.render(<Welcome user="John Doe" />, document.getElementById("root"));

// -----------using props----------------

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

//--------using props-----------

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

//---------------useState---------------

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

//------------conditional rendering-----------

function App() {
  const [showMessage, setShowMessage] = useState(false);

  function onClick() {
    setShowMessage(!showMessage);
  }

  return (
    <>
      <button onClick={onClick}>click me</button>
      {showMessage && <Message />} //conditional rendering
    </>
  );
}

function Message() {
  return <p>The message</p>;
}

ReactDOM.render(<App />, document.getElementById("root"));

//----------------conditional rendering-------------------

function App() {
  const [showMessage, setShowMessage] = useState(false);

  function onClick() {
    setShowMessage(!showMessage);
  }

  return (
    <>
      <button onClick={onClick}>click me</button>
      {showMessage && <Message message="Toggled on" />}
      {!showMessage && <Message message="Toggled off" />}
      {/* {showMessage ? <Message message="Toggled on" /> : <Message message="Toggled off" />} */}
    </>
  );
}

function Message(props) {
  return <p>{props.message}</p>;
}

//----------------rendering lists---------------------

function App() {
  const snippets = [
    { title: "Snippet 1" },
    { title: "Snippet 2" },
    { title: "Snippet 3" },
  ];

  function renderSnippets() {
    return snippets.map((snippet, index) => {
      return <Snippet title={snippet.title} key={index} />;
    });
  }

  return <>{renderSnippets()}</>;
}

function Snippet(props) {
  return <h1>{props.title}</h1>;
}

//-------------------handling forms---------------

function App() {
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  function sendData(e) {
    e.preventDefault();

    // sending/using data
    console.log(formUsername);
    console.log(formPassword);

    setFormUsername("");
    setFormPassword("");
  }

  return (
    <>
      <form onSubmit={sendData}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setFormUsername(e.target.value)}
          value={formUsername}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setFormPassword(e.target.value)}
          value={formPassword}
        />
        <br />
        <button type="submit">send</button>
      </form>
    </>
  );
}

//-----------------advanced use effect--------------------------

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [messageShown, setMessageShown] = useState(false);

  useEffect(() => {
    console.log("Component updating");
  }); //wach and trigger for eny component update

  useEffect(() => {
    console.log("Component mount");
    setInterval(() => {
      setRandomNumber(Math.random());
    }, 1000);
  }, []); //empty dependency will allow only 1 time to run, also prevent setInterval to create a side effect. setInterval will run normally every second

  useEffect(() => {
    console.log("Specific state update");
  }, [messageShown]); //wach and run only when a specific dependency update

  return (
    <>
      <h1>{randomNumber}</h1>
      <button onClick={() => setMessageShown(!messageShown)}>
        Toggle message
      </button>
      {messageShown && <p>Some message</p>}
    </>
  );
}

//-----------advanced use effect with cleatInterval (performance issue fix on setInterval)--------------------

function App() {
  return (
    <>
      <button onClick={() => setMessageShown(!messageShown)}>
        Toggle message
      </button>
      {messageShown && (
        <>
          <Random />
          {/*<Random /> on unmoant will trigger an error because useEffect cannot perform on unmounted components. To fix, must be a cleanup function*/}
          <p>Some message</p>
        </>
      )}
    </>
  );
}

function Random() {
  const [randomNumber, setRandomNumber] = useState(Math.random());

  useEffect(() => {
    console.log("Component mount");
    const intervalId = setInterval(() => {
      setRandomNumber(Math.random());
      console.log("Setting new random number");
    }, 1000);

    // this return is a cleanup function
    // setInterval must be stored in a variable
    // clearInterval(variable)
    return () => {
      console.log("Component unmount");
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{randomNumber}</h1>;
}
