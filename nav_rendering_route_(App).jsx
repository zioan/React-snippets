import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages route
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
