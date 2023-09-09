const User = require("../Models/UserModels");
const Ticket = require("../Models/TicketModel");

const getTickets = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const tickets = await Ticket.find({ user: req.user.id });

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @route  users/tickets/:id
const getTicket = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).json({ message: "Not Authorized" });
      return;
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//delete tickets
const deleteTicket = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      res.status(404);
      throw new Error("Ticket not found"); // Throw error as a string
    }

    if (ticket.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("Not Authorized"); // Throw error as a string
    }

    await ticket.remove();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//update ticket
// @route  users/tickets/:id
//PUT request
const updateTicket = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
      return;
    }

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).json({ message: "Not Authorized" });
      return;
    }

    res.status(200).json(ticket);

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const createTicket = async (req, res) => {
  try {
    const { product, description } = req.body;

    if (!product || !description) {
      res.status(400).json({ message: "Please add a product and description" });
      return;
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const ticket = await Ticket.create({
      product,
      description,
      user: req.user.id,
      status: "new",
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
};
