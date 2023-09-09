const express = require("express");

const router = express.Router();
const { protect } = require("../MiddleWare/authMiddleWare");
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require("../Controllers/TicketController");

// Re-route into note router
const noteRouter = require("./NoteRoutes");
router.use("/:ticketId/notes", noteRouter);

// Routes for ticket management
router
  .route("/")
  .get(protect, getTickets) // Get all tickets
  .post(protect, createTicket); // Create a new ticket

router
  .route("/:id")
  .get(protect, getTicket) // Get a specific ticket by ID
  .delete(protect, deleteTicket) // Delete a ticket by ID
  .put(protect, updateTicket); // Update a ticket by ID

module.exports = router;
