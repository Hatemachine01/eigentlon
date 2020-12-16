import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import React from "react";
import Registration from "./containers/Registration";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/Registration">
        <Registration />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
