const { Router } = require('express')
const {moviesController, moviesControllerAdd} = require('../controllers/movieController')

const movieRoute = Router()

movieRoute.get("/", moviesController);
movieRoute.post("/", moviesControllerAdd);

module.exports = movieRoute;