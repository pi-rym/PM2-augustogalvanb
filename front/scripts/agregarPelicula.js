class Movies {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title,
        this.year = year,
        this.director = director,
        this.duration = duration,
        this.genre = genre,
        this.rate = rate,
        this.poster = poster
    }
}

const axios = require("axios");

const inputValues = () => {
    const inputTitle = document.getElementById('inputTitle');
    const inputYear = document.getElementById('inputYear');
    const inputDirector = document.getElementById('inputDirector');
    const inputDuration = document.getElementById('inputDuration');
    const inputGenre = document.getElementById('inputGenre');
    const inputRate = document.getElementById('inputRate');
    const inputPoster = document.getElementById('inputPoster');

    // validacion de datos
    if (!inputTitle.value || !inputPoster.value || !inputYear.value || !inputDirector.value || !inputDuration.value || !inputGenre.value || !inputRate.value) {
        alert('Por favor completa todos los campos');
        return;
    }

    const titleValue = inputTitle.value;
    const yearValue = inputYear.value;
    const directorValue = inputDirector.value;
    const durationValue = inputDuration.value;
    const genreValue = inputGenre.value.split(',').map(genre => genre.trim());
    const rateValue = inputRate.value;
    const PosterValue = inputPoster.value;

    const data = new Movies (titleValue, yearValue, directorValue, durationValue, genreValue, rateValue, PosterValue);
    
    axios.post("http://localhost:3000/movies", data)
    .then((response) => {
        response.data
    })
    .catch((error) => {
        error.message;
    });

};

const deleteInputValues = () => {
    const inputTitle = document.getElementById('inputTitle');
    const inputYear = document.getElementById('inputYear');
    const inputDirector = document.getElementById('inputDirector');
    const inputDuration = document.getElementById('inputDuration');
    const inputGenre = document.getElementById('inputGenre');
    const inputRate = document.getElementById('inputRate');
    const inputPoster = document.getElementById('inputPoster');
    
    
    inputTitle.value = "";
    inputYear.value = "";
    inputDirector.value = "";
    inputDuration.value = "";
    inputGenre.value = "";
    inputRate.value = "";
    inputPoster.value = "";
};

const buttonAdd = document.getElementById('button');
buttonAdd.addEventListener("click", inputValues);

const buttonDelete = document.getElementById('buttonDelete');
buttonDelete.addEventListener("click", deleteInputValues);
