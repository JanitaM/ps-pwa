import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import ResetPassword1 from "../pages/ResetPassword1";
import SignupConfirmation from "../pages/SignupConfirmation";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/ps-pwa" component={Landing} />
        <Route exact path="/resetpassword" component={ResetPassword1} />
        <Route
          exact
          path="/signupconfirmation"
          component={SignupConfirmation}
        />
      </Switch>
    </>
  );
}
