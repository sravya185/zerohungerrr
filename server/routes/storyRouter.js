const express = require('express')
const {addSuccessstory,getSuccessstory} = require('../controllers/story')

const storyRouter = express.Router()

storyRouter.post('/addStory',addSuccessstory);

storyRouter.get('/getStories',getSuccessstory);

module.exports = storyRouter;