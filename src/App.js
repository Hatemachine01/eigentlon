import "./App.css";

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
      <span>The current time is {time}</span>
    </div>
  );
}

export default App;
