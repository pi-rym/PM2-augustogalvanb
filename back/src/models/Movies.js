const moongose = require("mongoose");

const movieSchema = new moongose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster:String
});

const Movie = moongose.model("Movie", movieSchema);

module.exports = Movie;