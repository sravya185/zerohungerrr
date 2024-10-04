const Donar = require("../models/donar");
const Needy = require("../models/needy")

exports.addDonateFood = async (req, res) => {
    try {
      const newDonatedFood = new Donar({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        phoneno:req.body.phoneno,
        peoplecount:req.body.peoplecount,
      });    
      const savedData = await newDonatedFood.save();
     
      
      res.status(200).json({message:"Successfully added your details"})
  
    } catch (err) {
      res.status(400).json({message:'Failed to add details'});
    }
  };


  exports.addNewNeed= async (req, res) => {
    try {
      const newNeedFood = new Needy({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        phoneno:req.body.phoneno,
      });    
      const savedData = await newNeedFood.save();
     
      
      res.status(200).json({"message":"Successfully added your details"})
  
    } catch (err) {
      
      res.status(400).json({message:'Failed to add details'});
    }
  };


  exports.getDonateLocation = async(req,res)=>{
    try {
      const foodavailablelocations = await Donar.find()
   
      
      res.status(200).json({
        // "message":"Successfully fetched  food available locations"
        foodavailablelocations
      })
    } catch (err) {
      res.status(400).json("Error: " + err);
    }


  }

  
  exports.getNeedLocation = async(req,res)=>{
    try {
      const foodneededlocations = await Needy.find()
   
      
      res.status(200).json({
        // "message":"Successfully fetched  food available locations"
        foodneededlocations
      })
    } catch (err) {
      res.status(400).json("Error: " + err);
    }


  }





// filtering in backend starting lettes
  exports.getDonarMatchingAddresses = async (req, res) => {
    try {
      const  {city}  = req.body;
      
      if (!city) {
        return res.status(400).json({ err: "Please provide city name"});
      }
  
      const matchingLocations = await Donar.find({ city: { $regex: `^${city}`, $options: 'i' } });
  
      if (!matchingLocations || matchingLocations.length === 0) {
        return res.status(404).json({ msg: "No Food Available in this location" });
      }
  
      res.status(200).json({ matchingLocations });
    } catch (err) {
      res.status(500).json({ error: "Error: " + err.message });
    }

  };




exports.deleteDonar = async (req, res) => {
    try {
      // const donar = await Donar.findOne({_id : req.params.id});
      const donar = await Donar.findByIdAndDelete(req.params.id)
      if (!donar) {
        return res.status(404).json({ message: 'Donar not found' });
      }
      return res.status(200).json({ message: 'Donar deleted successfully' });
    } catch (error) {
      // console.error(error);
      return res.status(501).json({ message: "Deletion Failed" });
    }
  };
  


  exports.getNeedyMatchingAddresses = async (req, res) => {
    try {
      const  {city}  = req.body;
      
      if (!city) {
        return res.status(400).json({ err: "Please provide city name"});
      }
  
      const matchingLocations = await Needy.find({ city: { $regex: `^${city}`, $options: 'i' } });
  
      if (!matchingLocations || matchingLocations.length === 0) {
        return res.status(404).json({ msg: "No Food needed in this location" });
      }
  
      res.status(200).json({ matchingLocations });
    } catch (err) {
      res.status(501).json({ error: "Error: " + err.message });
    }

  };

  exports.deleteNeedy = async (req, res) => {
    try {
      // const needy = await Needyr.findOne({_id : req.params.id});
      const needy = await Needy.findByIdAndDelete(req.params.id)
      if (!needy) {
        return res.status(404).json({ message: 'Needy not found' });
      }
      return res.status(200).json({ message: 'Needy deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(501).json({ message: "Deletion Failed" });
    }
  };
  


  // handling spaces but not starting letters

  // exports.getMatchingAddresses = async (req, res) => {
  //   try {
  //     const {city} = req.body;
  //     console.log(city)
  //     if (!city) {
  //       return res.status(400).json({ message: "Please provide city name" });
  //     }
  
  //     // Convert the city input to lowercase and remove spaces
  //     const formattedCity = city.toLowerCase().replace(/\s/g, '');
  
  //     const matchingLocations = await Donar.find({}).lean();
  
  //     // Filter matching locations by comparing formatted city names
  //     const filteredLocations = matchingLocations.filter(location => {
  //       const formattedLocationCity = location.city.toLowerCase().replace(/\s/g, '');
  //       return formattedLocationCity === formattedCity;
  //     });
  
  //     if (!filteredLocations || filteredLocations.length === 0) {
  //       return res.status(404).json({ msg: "No Food Available in this location" });
  //     }
  
  //     res.status(200).json({ matchingLocations: filteredLocations });
  //   } catch (err) {
  //     res.status(500).json({ error: "Error: " + err.message });
  //   }
  // };
  