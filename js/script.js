"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); //const, +prompt

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};// correct
let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    // c = prompt('Один из последних просмотренных фильмов?', ''),
    // d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// let movies = {
//     movieName: questionOne,
//     movieMark: questionTwo
// };
console.log(personalMovieDB); // почти