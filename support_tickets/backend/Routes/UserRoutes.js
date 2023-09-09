const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  // deleteUser,
  // readData,
  getMe,
} = require("../Controllers/UserControllers");

const { protect } = require("../MiddleWare/authMiddleWare");

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.delete("/delete", deleteUser);
// router.put("/read", readData);
router.get("/me", protect, getMe);

module.exports = router;
