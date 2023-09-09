const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./Routes/UserRoutes");

const port = process.env.PORT;
const app = express();

app.use("/users", userRoutes);

app.listen(port, console.log(`Connected to PORT : ${port}`));
