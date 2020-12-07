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
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
        å
      />
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
