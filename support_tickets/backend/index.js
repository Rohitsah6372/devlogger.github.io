const express = require("express");
const dotenv = require("dotenv");
const dotenvResult = dotenv.config();
const Port = process.env.PORT || 8000;
const connectDB = require("./Config/db.js");
const cors = require("cors");
const { errorHandler } = require("./MiddleWare/errorMiddleWare");

// Load environment variables and check for errors
if (dotenvResult.error) {
  throw dotenvResult.error;
}

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add CORS middleware to allow requests from all origins
app.use(cors());

app.use("/users", require("./Routes/UserRoutes"));
app.use("/tickets", require("./Routes/TicketRoutes"));

// Error handling middleware
app.use(errorHandler);

app.listen(Port, () => console.log(`Server started on PORT: ${Port}`));
