const mongoose = require("mongoose");

const URI =
  "mongodb+srv://gofood:6372881648@cluster0.qox083r.mongodb.net/?retryWrites=true&w=majority";
console.log(URI);

const mongoDB = async () => {
  try {
    const connection = await mongoose.createConnection(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // for console warnings
    });

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    const usersCollection = connection.collection("food");
    const data = await usersCollection.find();
    console.log(data);

    connection.close(); // Close the connection when done
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
