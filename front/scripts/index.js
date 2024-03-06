class Pelicula {
    constructor(poster, title) {
      this.poster = poster;
      this.title = title;
    }
  }

  class Repositorio {
    constructor() {
      this.peliculas = [];
    }
  
    crearPelicula({ poster, title }) {
      const nuevaPelicula = new Pelicula(poster, title);
      this.peliculas.push(nuevaPelicula);
    }
  
    darPeliculas() {
      return this.peliculas;
    }
  }

const repositorio = new Repositorio();



function solicitudGet ()  {
    $.get(`https://students-api.2.us-1.fl0.io/movies`, infoPeliculas);
}


const infoPeliculas = (data) => {
    data.forEach(pelicula => {
        repositorio.crearPelicula(pelicula);
    });
    renderPeliculas();
};

const renderPeliculas = () => {
    const peliculas = repositorio.darPeliculas();

    const TodasLasPeliculas = peliculas.map(mapearPeliculas);

    TodasLasPeliculas.forEach((pelicula) => contenedorPeliculas.appendChild(pelicula));
}

const mapearPeliculas = (pelicula) => {
    const contenedorPeliculas = document.getElementById('contenedorPeliculas');

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
    return nuevoDiv;
    
}

solicitudGet()

