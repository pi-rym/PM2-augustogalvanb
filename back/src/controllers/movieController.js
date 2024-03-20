const movieService = require('../services/movieService')

const moviesController = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const moviesControllerAdd = async (req, res) => {
     try {
         const {title, year, director, duration, genre, rate, poster} = req.body;
         const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovie);
     } catch (error) {
         res.status(500).json({error:error.message})
     }
}

module.exports = {moviesController, moviesControllerAdd}
