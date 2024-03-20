const Movie = require("../models/Movies")
module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
     },

    createMovie: async (movie) => {
        const newMovie = await Movie.create(movie);
        return newMovie;
    }
}