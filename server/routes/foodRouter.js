const express = require("express");

const {addDonateFood,addNewNeed,getDonateLocation,getNeedLocation,getDonarMatchingAddresses, getNeedyMatchingAddresses,deleteNeedy,deleteDonar} = require('../controllers/food')


const foodRouter = express.Router();

foodRouter.post('/donate',addDonateFood)
foodRouter.post('/need',addNewNeed)
foodRouter.get('/getavailablelocations',getDonateLocation)
foodRouter.get('/getneededlocations',getNeedLocation)
foodRouter.post('/getAdressesOfFoodAvailableLocations',getDonarMatchingAddresses)
foodRouter.delete('/deleteDonar/:id',deleteDonar)
foodRouter.post('/getAdressesOfFoodNeededLocations',getNeedyMatchingAddresses)
foodRouter.delete('/deleteNeedy/:id',deleteNeedy)
module.exports = foodRouter;