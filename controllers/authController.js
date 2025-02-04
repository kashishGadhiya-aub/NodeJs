const authService = require("../services/authService");

const register = async (req, res) => {
  const { username, email,password } = req.body;
    const message = await authService.registerUser(username, email,password);
    res.status(201).json({ message });

};

const login = async (req, res) => {
  const { username, email } = req.body;
    const message = await authService.loginUser(username, email);
    res.status(200).json({ message });
};

const getAllUsers = async (req, res) => {
    const users = await authService.getAllUsers();
    res.status(200).json(users);

};

module.exports = {
  register,
  login,
  getAllUsers,
};
