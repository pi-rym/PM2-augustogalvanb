const tempData = [
    {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
  ];

// import tempData from "./tempData";

// console.log(tempData);




const contenedorPeliculas = document.getElementById('contenedorPeliculas');
tempData.forEach(pelicula => {
    const nuevoDiv = document.createElement('div');
    const imagenPelicula = document.createElement('img');
    const nombrePelicula = document.createElement('h4');
    
    nuevoDiv.classList.add('estiloNuevoDiv')
    imagenPelicula.classList.add('imagenPelicula');
    nombrePelicula.classList.add('titulo');

    imagenPelicula.src = pelicula.poster;
    
    nombrePelicula.textContent = pelicula.title;
    
    nuevoDiv.appendChild(imagenPelicula);
    nuevoDiv.appendChild(nombrePelicula);
    contenedorPeliculas.appendChild(nuevoDiv);
});
