const renderMovies = require("./renderMovies")

function solicitudGet ()  {
  $.get(`https://students-api.up.railway.app/movies`, renderMovies);
}

solicitudGet()