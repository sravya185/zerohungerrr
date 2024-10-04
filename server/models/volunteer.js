const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneno:{
    type:String,
    required:true,
  },
  email:{
    type: String,
    required:true,
  },
  password: {
    type: String,
    required: true,
  },
  
  
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;