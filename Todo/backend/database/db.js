import mongoose from "mongoose";

const URI =
  "mongodb+srv://gofood:6372881648@cluster0.qox083r.mongodb.net/?retryWrites=true&w=majority";

const conn = async () => {
  const data = mongoose.connect(URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error", error.message);
  });
};

export default conn;
