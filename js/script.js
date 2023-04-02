

// !ЛЕКЦИЯ 19 - СОЗДАЕМ КОНСОЛЬНОЕ ПРИЛОЖЕНИЕ



// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
// };

// const a = prompt("Один из последних просмотреных фильмов?", ""),
//       b = prompt("На сколько вы его оценили?", ""),
//       c = prompt("Один из последних просмотреных фильмов?", ""),
//       d = prompt("На сколько вы его оценили?", "");

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;






// !ЛЕКЦИЯ 24 - добавляем условия и циклы


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
// };

//      for (let i = 0; i < 2; i++) {
//           const a = prompt("Один из последних просмотреных фильмов?", ""),
//                 b = prompt("На сколько вы его оценили?", "");


//           if (a != null && b != null && a != "" && b != "" & a.length < 50) {
//               personalMovieDB.movies[a] = b; 
//               console.log("done");
//           } else {
//                console.log("error");
//                i--;
//           }
//      }
     
//      if (personalMovieDB.count < 10) {
//           console.log("Просмотрено мало фильмов");
//      } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//           console.log("Вы классический зритель");
//      } else if(personalMovieDB.count >= 30) {
//           console.log("Вы киноман");
//      } else {
//           console.log("Произошла ошибка");
//      }

//       console.log(personalMovieDB);


// !ЛЕКЦИЯ 29 - используем функции

      let numberOfFilms;

function start() {
     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
     }
}

start();

      const personalMovieDB = {
           count: numberOfFilms,
           movies: {},
           actors: {},
           genres: [],
           privat: false
      };
      
function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {
                const a = prompt("Один из последних просмотреных фильмов?", ""),
                      b = prompt("На сколько вы его оценили?", "");
      
      
                if (a != null && b != null && a != "" && b != "" & a.length < 50) {
                    personalMovieDB.movies[a] = b; 
                    console.log("done");
                } else {
                     console.log("error");
                     i--;
                }
           }
     }

     rememberMyFilms();
           
           function detectPersonalLevel() {
               if (personalMovieDB.count < 10) {
                console.log("Просмотрено мало фильмов");
           } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
           } else if(personalMovieDB.count >= 30) {
                console.log("Вы киноман");
           } else {
                console.log("Произошла ошибка");
           }
           }

           detectPersonalLevel();
      
           function showMyDB(hidden) {
               if (!hidden) {
                    console.log(personalMovieDB);
               }
            }
            
            showMyDB(personalMovieDB.privat);
            
            function wrightYourGenres() {
               for (let i = 1; i <= 3; i++) {
                    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                    personalMovieDB.genres[i - 1] = genre;
               }
            }

            wrightYourGenres();
      
            










// *
// **
// ***            <-------  КЛАССИЧЕСКАЯ ЗАДАЧА НА ПОСТРОЕНИЕ ЕЛКИ ИЗ ЗВЕЗДОЧЕК
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//      for (let j = 0; j < i; j++) {
//           result += "*";
//      }

//      result += "\n";
// }

// console.log(result);

