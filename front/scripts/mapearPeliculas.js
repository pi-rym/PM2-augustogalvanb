const mapearPeliculas = (pelicula) => {
    

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

  module.exports = mapearPeliculas;