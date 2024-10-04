const Volunteer = require("../models/volunteer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {

    try {
      const { username,phoneno, email, password } = req.body;
  
      // Check if the required fields are added or not
      if (!username || !password || !email || !password) {
        return res
          .status(400)
          .json({message:"Please fill all required fields" });
      }
  
      // Check if a user with the same username already exists
      const existingUsername = await Volunteer.findOne({ username});
      if (existingUsername) {
        return res.status(409).json({message: "User already exists"});
      }
  
      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Create a new user
      const newVolunteer = new Volunteer({
        username,
        phoneno,
        email,
        password: hashedPassword,
      });
  
      await newVolunteer.save();
  
      // Generate and return the JWT token after sign up
      const Volunteer_data = await Volunteer.findOne({ username });
      const token = jwt.sign({ Volunteer_id: Volunteer_data._id }, process.env.JWT_SECRET, {
        expiresIn : 600,
      });

      res.status(201).json({
        message: "Registered successfully",
        username: Volunteer_data.username,
        token,
      });

    } catch (error) {
      console.log(error)
      res.status(501).json({ message: "Failed to register" });
    }
};



exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the required fields are provided
    if (!username|| !password) {
      return res
        .status(400)
        .json({ message:"Please provide username and password" });
    }

    // Find the user by email
    const volunteer = await Volunteer.findOne({ username});
    if (!volunteer) {
      return res.status(401).json({ message:"Invalid username" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, volunteer.password);
    if (!passwordMatch) {
      return res.status(402).json({ message:"Invalid password" });
    }

    // Generate and return the JWT token
    const token = jwt.sign({ volunteer_id: volunteer._id }, process.env.JWT_SECRET, {
      expiresIn: 600,
    });
    res
      .status(200)
      .json({ message: "Login successful", username: volunteer.username, token });
  } catch (error) {
    res.status(501).json({ message: "Failed to login" });
  }
};