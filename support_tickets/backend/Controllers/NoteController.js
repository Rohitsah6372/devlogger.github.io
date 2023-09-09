const User = require("../Models/UserModels");
const Ticket = require("../Models/TicketModel");
const Note = require("../Models/NoteModel");

// Get notes for a ticket
const getNotes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    if (ticket.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "User not authorized" });
    }

    const notes = await Note.find({ ticket: req.params.ticketId });

    res.status(200).json(notes);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ message: "Server Error" });
  }
};

// Create tciket note
const addNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    if (ticket.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "User not authorized" });
    }

    const note = await Note.create({
      text: req.body.text,
      ticket: req.params.ticketId,
      user: req.user.id,
    });

    res.status(200).json(notes);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes

    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getNotes,
  addNotes,
};
