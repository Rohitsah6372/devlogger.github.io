//for inserting data into mongodb

const mongoose = require("mongoose");
const mongoDB = require("./db");
const burgerModel = require("./models/burgerModel");
const burgerData = require("./data/burgerData");

mongoDB();

//import data
const importData = async () => {
  try {
    await burgerModel.deletMany();
    const sampleData = burgerData.map((burger) => {
      return { ...burger };
    });
    await burgerModel.insertMany(sampleData);
    console.log("datat imported");
    process.exit();
  } catch (error) {
    console.log(`error`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
