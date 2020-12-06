const express = require("express");
const app = express();
const port = 5000;

app.get("/time", (req, res) => {
  res.json({
    time: Date.now(),
  });
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
