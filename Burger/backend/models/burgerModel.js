const mongoose = require("mongoose");
const { Schema } = mongoose;

const burgerSchema = new Schema(
  {
    name: String,
    text: String,
    ingredients: String,
    comments: [],
    image: {
      type: String,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

const burgerModel = mongoose.model("burger", burgerSchema);

module.exports = burgerModel;
