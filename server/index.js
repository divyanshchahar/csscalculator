const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const handlePost = require("./handlePost");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  handlePost(req.body);
  setTimeout(() => {
    res.download("../output/resolved_variables.txt");
  }, 1000);
});

app.listen(3200);
