import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Landing from "../pages/Landing";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/landing">
          <Landing />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/landing" component={Landing} />
      </Switch>
    </>
  );
}
