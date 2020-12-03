import "./App.css";
import { Button } from '@material-ui/core';

import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch("/time")
      .then((response) => response.json())
      .then((data) => setTime(data.time));
  }, []);

  return (
    <div className="App">
      Eigentlon
      <div>The current time is {time}</div>
      <Button color="primary" variant="contained">
        Click Me
      </Button>
    </div>
  );
}

export default App;
