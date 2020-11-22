import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import ActiveCases from "./components/ActiveCases";
import Nav from "./components/Nav";
import Symptoms from "./Symptoms";
import Healthy from "./Healthy";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const App = () => {
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          exact
          path="/about"
          component={About}
        />
        <Route 
          exact
          path="/healthy"
          component={Healthy}
        />
        <Route
          exact
          path="/active-cases"
          component={ActiveCases}
        /> 
        <Route
          exact
          path = "/symptoms"
          component={Symptoms}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
