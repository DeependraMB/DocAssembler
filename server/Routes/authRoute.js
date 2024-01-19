const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { hashPassword, comparePassword } = require("../Helpers/Bcrypt");
const JWT = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);

    const existingUser = await User.findOne({ email: formData.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered. Please log in.",
      });
    }

    const hashedPassword = await hashPassword(formData.password);

    const newUser = new User({
      name: formData.name,
      mobno: formData.mobno,
      email: formData.email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error("Error in /signup route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(200).json({ message: "Invalid credentials" });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRETKEY, {
      expiresIn: "1d",
    });
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error during student login:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
