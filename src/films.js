const movies = require("./data");

// Exercise 1: Get the array of all directors.(Del array devuelve solo directores)
function getAllDirectors(movies) {
    let resultado = movies.map(peliculas=>peliculas.director);
    console.log("Exercise 1 ->", resultado);
    return resultado;
}

// Exercise 2: Get the films of a certain director(filtar por Peliculas por Director)
function getMoviesFromDirector(movies, director) {
  let resultado = movies.filter(pelicula => director === pelicula.director);
  console.log("Exercise 2 ->", resultado);
  return resultado;

}

// Exercise 3: Calculate the average of the films of a given director.
//Calcula el promedio de las películas de un director dado.
function moviesAverageOfDirector(movies, director) {
    let moviesDirector = movies.filter(pelicula => pelicula.director === director);
    let totalPeliculas = moviesDirector.reduce((totalScore, pelicula) => {
    return totalScore += pelicula.score;
    }, 0);
    let resultado = parseFloat ((totalPeliculas/moviesDirector.length).toFixed(2));
    return resultado;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let resultado = movies.map(pelicula => pelicula.title);
  let ordenTitle = resultado.sort((a,b)=>(a < b) ? -1 : 1);
  let indexTop = ordenTitle.slice(0,20);
  return indexTop;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let ordenTitle = movies.sort(function(a,b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year < b.year ? -1 : 1;
  });
  let resultado = ordenTitle.map(pelicula => {
    return {...pelicula}
  });
  return resultado;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let moviesCategory = movies.filter(pelicula => category === pelicula.genre[0]);
  let score = movies.filter(pelicula => pelicula.score === '');
  let resultado = moviesCategory.reduce((average, movie) => {
    return Number(parseFloat(average += movie.score / (moviesCategory.length - score.length).toFixed(2))); // output '3.20'
  }, 0);
  return resultado;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let duration = movies.map(pelicula => {
    return {duration: pelicula.duration}
  });

  let resultado = [];
  duration.forEach(pelicula => {
    let durationSplit = pelicula.duration.split(' ');
    let min = 0;
    if (durationSplit[0] === 'Fizz') {
      min = (parseInt(durationSplit[1])) * 1;
    } else if (durationSplit.length === 1) { 
      min = (parseInt(durationSplit[0])) * 60;
    } else {
      min = ((parseInt(durationSplit[0]) * 60) + (parseInt(durationSplit[1]) * 1));
    }
    pelicula.duration = min;
    resultado.push({ duration: pelicula.duration });
  });
  return resultado;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let newArray = movies.map(pelicula => {
    return {...pelicula}
  });
  let filterAny = newArray.filter(pelicula => pelicula.year === year);
  let ordenScore = filterAny.sort((a,b) => a.score < b.score ? 1 : -1);
  let resultado = ordenScore.slice(0,1);
  return resultado;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
