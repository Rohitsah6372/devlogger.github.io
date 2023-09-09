const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNotes } = require("../Controllers/NoteController");
const { protect } = require("../MiddleWare/authMiddleWare");

router.route("/").get(protect, getNotes).post(protect, addNotes);

module.export = router;
