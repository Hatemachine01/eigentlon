const express = require("express");
const app = express();
const port = 5000;

app.get("/time", (req, res) => {
  res.json({
    time: new Date().toUTCString(),
  });
});

app.get("/user", (req, res) => {
  res.json({
    id: "1",
    email: "Jules@gmail.com",
    password: "1234",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
