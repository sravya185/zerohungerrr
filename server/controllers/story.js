
const SuccessStory = require("../models/successstory");


exports.addSuccessstory = async (req, res) => {
    try {
      const newSuccessstory = new SuccessStory({
        description: req.body.description,
        image: req.body.image,
      });    
      const successstory = await newSuccessstory.save();
     
      
      res.status(200).json({"message":"Successfully added your story into successstory"})
  
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  };

exports.getSuccessstory = async (req, res) => {
  
    try {
    const stories = await SuccessStory.find();
    
    res.status(200).json({"success_stories":stories})
  
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  };