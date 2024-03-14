const { Router } = require('express')
const movieRoute = require('./movieRoute')



const router = Router()
router.use("/movies", movieRoute)

module.exports = router