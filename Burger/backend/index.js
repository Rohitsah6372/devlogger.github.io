const express = require("express");
const mongoDB = require("./db");

mongoDB();

const app = express();
app.use(express.json()); // Corrected: express.json should be invoked as a function

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(8080, () => {
  console.log("Server Running "); // Added port number to the log message
});
