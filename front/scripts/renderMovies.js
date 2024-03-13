const mapearPeliculas = require('./mapearPeliculas')
const renderMovies = (data) => {
    const contenedorPeliculas = document.getElementById('contenedorPeliculas');
    const peliculas = data.map(mapearPeliculas)
    peliculas.forEach((pelicula) => contenedorPeliculas.appendChild(pelicula));
  }

  module.exports = renderMovies;
  