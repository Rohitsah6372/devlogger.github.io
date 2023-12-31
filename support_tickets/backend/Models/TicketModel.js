const mongoose = require("mongoose");
const User = require("../Models/UserModels");

const PRODUCT_ENUM = ["iPhone", "Macbook Pro", "iMac", "iPad"];
const STATUS_ENUM = ["new", "open", "closed"];

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Make sure this matches your user model name in the export
    },
    product: {
      type: String,
      required: [true, "Please add a product"],
      enum: PRODUCT_ENUM,
    },
    description: {
      type: String,
      required: [true, "Please add a description of the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: STATUS_ENUM,
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
