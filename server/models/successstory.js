const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema({
  title : {
    type:String,
    required : true,
  },
  description: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true,
  }
});

const SuccessStory = mongoose.model("SuccessStory", successStorySchema);

module.exports = SuccessStory;