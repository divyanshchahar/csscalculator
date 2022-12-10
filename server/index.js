const express = require("express");
const bodyParser = require("body-parser");

const handlePost = require("./handlePost");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  handlePost(req.body);
  res.json({ status: 201 });
});

app.listen(3200);
