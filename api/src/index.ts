const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const fs = require("fs");

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

let treesData: null = null;


fs.readFile("data.json", "utf8", (err: Error, jsonString: string) => {
  if (err) {
    return;
  }
  try {
    treesData = JSON.parse(jsonString);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
