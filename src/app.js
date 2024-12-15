const express = require("express");

const app = express();

app.use("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.use("/testing", (req, res) => {
  res.send("Test Server");
});

app.use("/", (req, res) => {
  res.send("Homesss");
});

app.listen(3000, () => {
  console.log("Listening 3000");
});
