const { Router } = require('express')
const movieRoute = require('./moviesRoute')



const router = Router()
router.use("/movies", movieRoute)

module.exports = router