const registerUser = async (req, res) => {
  res.status(200).json({ message: "Registered" });
};

const loginUser = async (req, res) => {
  res.status(200).json({ message: "Logged in" });
};

module.exports = {
  registerUser,
  loginUser,
};
