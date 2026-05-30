import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("hellooow xD");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/secret", (req, res) => {
  res.send(process.env.NOT_SO_SECRET);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
