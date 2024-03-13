const { Router } = require('express')
const moviesController = require('../controllers/movieController')

const movieRoute = Router()

movieRoute.get("/", moviesController);

module.exports = movieRoute;