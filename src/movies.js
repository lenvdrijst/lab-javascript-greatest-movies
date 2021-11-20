const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(function (item) {
    return item.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) return 0;
  
    const moviesOfSpielberg = movies.filter(function (item) {
      return (
        item.director === 'Steven Spielberg' && item.genre.includes('Drama')
      );
    });
    return moviesOfSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  
  const correctedObject = movies.filter(function(item) {
    return typeof item.score === 'number';
  })

  const sumOfTheScores = correctedObject.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.score;
  }, 0);
  const average = sumOfTheScores / movies.length;
  const stringWithTwoDecimals = average.toFixed(2); // toFixed returns a string (!)
  const toNumberWithDecimals = parseFloat(stringWithTwoDecimals); // convert back to number

  return toNumberWithDecimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(item) {
    return item.genre.includes("Drama")
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalSum = dramaMovies.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.score;
  }, 0)

  const average = totalSum / dramaMovies.length;
  const fixedAverage = average.toFixed(2);
  const toNumberWithDecimals = parseFloat(fixedAverage);

  return toNumberWithDecimals;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(listOfMovies) {
  const newListOfMovies = [...listOfMovies]
  return newListOfMovies.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1
      } else {
        return 1;
      }
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(listOfMovies) {
  const newListOfMovies = [...listOfMovies];

  if (newListOfMovies.length === 1) {
    return newListOfMovies[0].title;
  }

  if (newListOfMovies.length > 20) {
    newListOfMovies.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }
    });

    const listWith20Elements = newListOfMovies.filter(function (item, index) {
      if (index < 20) {
        return item;
      }
    });

    const mappedTitles = listWith20Elements.map(function (item) {
      return item.title;
    });

    return mappedTitles;

  } else {
    // array with less than 20 elements
    const mappedTitles = newListOfMovies.map(function (item) {
      return item.title;
    });

    mappedTitles.sort();

    return mappedTitles;
  }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}