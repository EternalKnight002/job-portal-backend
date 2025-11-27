// src/controllers/auth.controller.js
import * as authService from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { email, password, full_name } = req.body;
    const user = await authService.registerUser(email, password, full_name);
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.loginUser(email, password);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
