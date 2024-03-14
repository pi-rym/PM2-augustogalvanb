const renderMovies = require("./renderMovies")

// function solicitudGet ()  {
//   $.get(`https://students-api.up.railway.app/movies`, renderMovies);
// }

// solicitudGet()

//solicitud HTTP GET a la URL de películas utilizando la librería axios.
//manejo de la asincronía utilizando promesas
//las promesas representan el eventual resultado de una operación asíncrona.
const axios = require("axios");

// const promise = axios.get("https://students-api.up.railway.app/movies");

// //succes handler
// promise
// .then((response) => {
//   response.data;
// })
// .catch((error) => {
//   error
// })
//error handler

//

//manejo de la asincronía utilizando async/await: define una funcion de tipo async

const fetchMovies = async () => {
  try {
    const data = await axios.get("http://localhost:3000/movies")
    renderMovies(data.data);
  } catch (error) {
    error.message
  }
  
}

fetchMovies();




