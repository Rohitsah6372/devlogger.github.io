const mongoose = require("mongoose");
const User = require("../Models/UserModels");
const Ticket = require("../Models/TicketModel");

const PRODUCT_ENUM = ["iPhone", "Macbook Pro", "iMac", "iPad"];
const STATUS_ENUM = ["new", "open", "closed"];

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Make sure this matches your user model name in the export
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Ticket",
    },
    text: {
      type: String,
      required: [true, "Please add some text"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    }, // Define isStaff as a Boolean
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
