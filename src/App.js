import "./App.css";

import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import Login from "./containers/Login";
import { Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch("/time")
      .then((response) => response.json())
      .then((data) => setTime(data.time));
  }, []);

  return (
    <div className="App">
      <h1> Eigentlon </h1>
      {/* <Button color="primary" variant="contained">
        Login
      </Button> */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <div>Sign Up</div>
        </Route>
      </Switch>

      <div>The current time is {time}</div>
    </div>
  );
}

export default App;
