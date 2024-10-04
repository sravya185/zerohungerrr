const mongoose = require("mongoose");

const needySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phoneno:{
    type:String,
    required:true,
  },
});

const Needy = mongoose.model("NeedFood", needySchema);

module.exports = Needy;